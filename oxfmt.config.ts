import { defineConfig } from "oxfmt";

export default defineConfig({
	tabWidth: 4,
	useTabs: true,
	printWidth: 100,
	semi: true,
	singleQuote: false,
	jsxSingleQuote: false,
	quoteProps: "as-needed",
	bracketSpacing: true,
	trailingComma: "all",
	arrowParens: "always",
	endOfLine: "lf",
	ignorePatterns: ["**/dist/**", "**/node_modules/**", "**/coverage/**", "**/.turbo/**"],
	sortImports: {
		ignoreCase: true,
		order: "asc",
		internalPattern: [],
		customGroups: [
			{
				groupName: "react",
				elementNamePattern: ["react", "react-**"],
			},
			{
				groupName: "scope",
				elementNamePattern: ["@ylfjuk/**", "@ylfjuk-core/**"],
			},
		],
		groups: [
			"side_effect",
			"builtin",
			"external",
			"react",
			{
				newlinesBetween: false,
			},
			"scope",
			["internal", "subpath"],
			{
				newlinesBetween: false,
			},
			["parent", "sibling", "index"],
			["style", "side_effect_style"],
			"unknown",
		],
	},
	sortPackageJson: {
		sortScripts: false,
	},
});
