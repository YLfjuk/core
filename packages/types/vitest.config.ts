import { defineProject } from "vitest/config";

import baseTsconfig from "../../tsconfig.base.json" with { type: "json" };

const {
	compilerOptions: { customConditions: conditions },
} = baseTsconfig;

export default defineProject({
	resolve: {
		conditions,
	},
	ssr: {
		resolve: {
			conditions,
			externalConditions: conditions,
		},
	},
});
