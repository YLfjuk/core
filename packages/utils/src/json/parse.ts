import type { ParsedPrimitive, ReviverFN } from "./types/helpers";

type JsonParse = {
	<const T extends string | null>(text: T, reviver?: never): ParsedPrimitive<T>;
	<R = unknown>(text: string | null, reviver?: ReviverFN<R>): R;
};

/**
 * Parses JSON text into a JavaScript value, optionally transforming it with a reviver.
 *
 * @remarks The supported input is string or null. Exact inference covers null,
 * booleans, and canonical integers of at most 15 decimal digits. Other text returns
 * unknown. Revivers receive nested values before parents, including the root key "".
 * An explicit result type is a caller assertion, not schema validation.
 * @throws {SyntaxError} For invalid JSON text. Reviver exceptions propagate unchanged.
 * @since 0.0.9
 */
export const parse = JSON.parse as JsonParse;
