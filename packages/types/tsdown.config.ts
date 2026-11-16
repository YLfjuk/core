import { defineConfig } from "tsdown";

export default defineConfig({
	attw: {
		profile: "esm-only",
	},
	dts: {
		emitDtsOnly: true,
	},
	entry: ["src/index.ts"],
	fixedExtension: false,
	publint: true,
});
