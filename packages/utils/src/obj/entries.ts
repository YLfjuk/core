import type { ValueOf } from "@ylfjuk-core/types";

type Entry<T extends object> = ValueOf<{
	[K in keyof T]-?: K extends string | number ? [`${K}`, T[K]] : never;
}>;

/**
 * Gets the entries of an object as an array of key-value pairs.
 *
 * @remarks Returns own enumerable string-keyed entries, with numeric keys stringified and
 * symbols omitted. Key-value pairs retain their declared correlation. Structurally typed
 * objects can have extra runtime keys, so these types are not an exhaustive runtime guarantee.
 *
 * @since 0.0.8
 */
export const entries = <const T extends object>(obj: T): Entry<T>[] =>
	Object.entries(obj) as Entry<T>[];
