import { defineConfig } from "tsdown";

export default defineConfig({
	attw: {
		profile: "esm-only",
	},
	entry: ["src/index.ts"],
	fixedExtension: false,
	publint: true,
	sourcemap: true,
	target: "es2024",
});
