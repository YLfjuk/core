import { defineConfig } from "vitest/config";

import baseTsconfig from "./tsconfig.base.json" with { type: "json" };

const {
	compilerOptions: { customConditions: conditions },
} = baseTsconfig;

export default defineConfig({
	resolve: {
		conditions,
	},
	ssr: {
		resolve: {
			conditions,
			externalConditions: conditions,
		},
	},
	test: {
		coverage: {
			include: ["packages/core/src/**/*.ts", "packages/utils/src/**/*.ts"],
		},
		projects: ["apps/*", "packages/*", "playground/*"],
	},
});
