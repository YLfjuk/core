import type { ValueOf } from "@ylfjuk-core/types";

type Entry<T extends object> = ValueOf<{
	[K in keyof T]: [K, T[K]];
}>;

/**
 * Gets the entries of an object as an array of key-value pairs.
 *
 * @remarks Wraps {@link Object.entries} while retaining key and value types.
 *
 * @since 0.0.8
 */
export const entries = <const T extends object>(obj: T): Entry<T>[] =>
	Object.entries(obj) as Entry<T>[];
