import { jsonParse } from "./parse";
import { jsonSafeParse } from "./safe-parse";
import { jsonStringify } from "./stringify";

/**
 * Utility functions for {@link JSON}.
 *
 * @since 0.0.9
 */
export const Json = {
	parse: jsonParse,
	safeParse: jsonSafeParse,
    stringify: jsonStringify,
};

export { jsonParse, jsonSafeParse, jsonStringify };
