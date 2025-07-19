import type { UnionToTuple, ValueOf } from "@ylfjuk-core/types";

/**
 * @description Converts an `enum` into an ordered `tuple`
 *
 * @see {@link UnionToTuple}
 * @see {@link ValueOf}
 *
 * @example
 * const Name = {
 *  Bob: "bob",
 *  Bert: "bert",
 *  Berta: "berta"
 * } as const;
 *
 * const Names = Enum.toTuple(Name); // ["bob", "bert", "berta"]
 *
 * @since 0.0.10
 */
export const toTuple = <const E extends Record<string, string>>(e: E) =>
	Object.values(e) as UnionToTuple<ValueOf<E>>;
