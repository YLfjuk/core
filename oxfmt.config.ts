import { createOxfmtConfig } from "@ylfjuk/oxc/oxfmt";

const config = createOxfmtConfig({
	ignorePatterns: ["**/dist/**", "**/node_modules/**", "**/coverage/**", "**/.turbo/**"],
	scopes: ["ylfjuk", "ylfjuk-core"],
});

export default { ...config, endOfLine: "lf" };
