import type { ValueOf } from "@ylfjuk-core/types";

type Entry<T extends object> = ValueOf<{
	[K in keyof T]: [K, T[K]];
}>;

/**
 * Gets the entries of an object as an array of key-value pairs.
 *
 * @note A wrapper around {@link Object.entries} that retains the type of the keys and values.
 *
 * @since 0.0.8
 * @modified 0.0.10
 */
export const entries = <const T extends object>(obj: T): Entry<T>[] =>
	Object.entries(obj) as Entry<T>[];
