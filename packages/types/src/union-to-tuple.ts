import type { MemberOfUnion } from "./member-of-union.js";

/**
 * Converts a union into a tuple with unspecified, compiler-dependent order.
 *
 * @see {@link MemberOfUnion}
 *
 * @example
 * type Name = "bert" | "berta" | "bob";
 *
 * type NameTuple = UnionToTuple<Name>;
 * type Members = NameTuple[number]; // "bert" | "berta" | "bob"
 * type Length = NameTuple["length"]; // 3
 *
 * @since 0.0.18
 */
export type UnionToTuple<T> = [T] extends [never]
	? []
	: [...UnionToTuple<Exclude<T, MemberOfUnion<T>>>, MemberOfUnion<T>];
