import { createOxlintConfig } from "@ylfjuk/oxc/oxlint";

const config = createOxlintConfig({ jsdoc: true });

export default {
	...config,
	rules: {
		...config.rules,
		"jsdoc/check-tag-names": ["error", { definedTags: ["remarks"] }],
	},
};
