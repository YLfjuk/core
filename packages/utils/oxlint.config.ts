import config from "../../oxlint.config.ts";

export default {
	...config,
	rules: {
		...config.rules,
		"typescript/no-explicit-any": "off",
	},
};
