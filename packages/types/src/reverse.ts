import type { UnknownArray } from "./unknown-array.js";

/**
 * Reverses required tuple elements into a mutable tuple.
 *
 * @remarks Arrays and tuples that can be empty are returned unchanged. Required trailing elements are
 * reversed until that boundary; required leading elements before a rest array are not supported.
 *
 * @since 0.0.14
 */
export type Reverse<T extends UnknownArray> = [] extends T
	? T
	: T extends readonly [...infer Rest, infer Last]
		? [Last, ...Reverse<Rest>]
		: [];
