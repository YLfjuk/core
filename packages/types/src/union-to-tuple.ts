import type { LastOfUnion } from "./last-of-union.js";

/**
 * Converts a union into a tuple with unspecified, unstable element order.
 *
 * @remarks
 * Do not rely on a particular order or use this type to predict `Object.values`
 * order. Unions do not preserve insertion order or duplicate values.
 *
 * @see {@link LastOfUnion}
 *
 * @example
 * import type { UnionToTuple } from "@ylfjuk-core/types";
 *
 * type Name = "bert" | "berta" | "bob";
 *
 * type NameTuple = UnionToTuple<Name>; // Element order is unspecified.
 * type Members = NameTuple[number]; // "bert" | "berta" | "bob"
 * type Length = NameTuple["length"]; // 3
 *
 * @since 0.0.18
 */
export type UnionToTuple<T> = [T] extends [never]
	? []
	: [...UnionToTuple<Exclude<T, LastOfUnion<T>>>, LastOfUnion<T>];
