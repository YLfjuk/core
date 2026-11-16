import type { ReplacerFN, StringifiedPrimitive } from "./types/helpers";

type JsonStringify = {
	<const T>(
		value: T,
		replacer?: (number | string)[] | null,
		space?: string | number,
	): StringifiedPrimitive<T>;
	(
		value: unknown,
		replacer?: ReplacerFN | (number | string)[] | null,
		space?: string | number,
	): string | undefined;
};

/**
 * Serializes a value using native JSON behavior, including replacers and `toJSON`.
 *
 * @remarks Exact output types are retained for booleans, null, and integers of at most
 * 15 decimal digits. Strings and other numbers return string; objects, functions,
 * unknown values, and function replacers may also return undefined.
 * @throws {TypeError} For unsupported BigInt values or circular references.
 * @since 0.0.9
 */
export const stringify = JSON.stringify as JsonStringify;
