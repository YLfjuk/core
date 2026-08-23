import { createOxlintConfig } from "@ylfjuk/oxc/oxlint";

const config = createOxlintConfig({ jsdoc: true });

export default {
	...config,
	rules: { ...config.rules, "typescript/no-explicit-any": "off" },
};
