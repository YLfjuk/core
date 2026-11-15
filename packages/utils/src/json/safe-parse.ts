import type { Result, Success } from "@ylfjuk-core/types";

import { parse } from "./parse";
import type { ParsedPrimitive, ReviverFN } from "./types/helpers";

type JsonSafeParse = {
	<const T extends string | null>(
		text: T,
		reviver?: never,
	): unknown extends ParsedPrimitive<T>
		? Result<unknown, SyntaxError>
		: Success<ParsedPrimitive<T>>;
	<R = unknown>(text: string | null, reviver?: ReviverFN<R>): Result<R, unknown>;
};

/**
 * Parses JSON text, returning success data or the unchanged thrown value.
 *
 * @remarks Supports string or null, with the same inference as {@link parse}.
 * Unproven text can fail with SyntaxError. With a reviver, the failure reason is
 * unknown because callbacks can throw any value. A root result of undefined is
 * still a success. An explicit result type does not validate the parsed value.
 * @since 0.0.9
 */
export const safeParse = ((text: string | null, reviver?: ReviverFN) => {
	try {
		return { success: true, data: parse(text, reviver) };
	} catch (error) {
		return { success: false, reason: error };
	}
}) as JsonSafeParse;
