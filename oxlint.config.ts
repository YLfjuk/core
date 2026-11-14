import { defineConfig } from "oxlint";

export default defineConfig({
	plugins: [
		"eslint",
		"typescript",
		"unicorn",
		"import",
		"promise",
		"react",
		"jsx-a11y",
		"oxc",
		"jsdoc",
	],
	categories: {
		correctness: "error",
		suspicious: "warn",
		perf: "warn",
	},
	rules: {
		"no-console": "error",
		eqeqeq: ["error", "always"],
		"unicorn/prefer-node-protocol": "warn",
		"import/no-cycle": "error",
		"import/no-default-export": "error",
		"promise/valid-params": "off",
		"typescript/no-explicit-any": "warn",
		"typescript/consistent-type-imports": [
			"error",
			{
				fixStyle: "separate-type-imports",
			},
		],
		"typescript/consistent-type-definitions": ["warn", "type"],
		"typescript/no-non-null-assertion": "warn",
		"typescript/adjacent-overload-signatures": "error",
		"typescript/prefer-literal-enum-member": "error",
		"jsdoc/check-property-names": "error",
		"jsdoc/check-tag-names": [
			"error",
			{
				definedTags: ["remarks"],
			},
		],
		"jsdoc/require-throws-description": "error",
		"jsdoc/require-throws-type": "error",
	},
	overrides: [
		{
			files: ["**/*.config.ts", "**/*.config.mts", "**/*.config.mjs"],
			rules: {
				"import/no-default-export": "off",
			},
		},
		{
			files: ["**/scripts/**"],
			rules: {
				"no-console": "off",
			},
		},
		{
			files: ["**/test/**", "**/*.test.ts", "**/*.spec.ts"],
			rules: {
				"typescript/no-explicit-any": "off",
				"no-console": "off",
			},
		},
	],
});
