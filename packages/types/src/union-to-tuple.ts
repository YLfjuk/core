import type { LastOfUnion } from "./last-of-union";

/**
 * @description Converts a `union` into an ordered `tuple`
 *
 * @see {@link LastOfUnion}
 *
 * @example
 * type Enum = "bert" | "berta" | "bob";
 *
 * type EnumAsTuple = UnionToTuple<Enum>; // ["bert", "berta", "bob"]
 * type IsEnumAsTuple = IsTuple<EnumAsTuple>; // true
 *
 * @since 0.0.18
 */
export type UnionToTuple<T> = [T] extends [never]
	? []
	: [...UnionToTuple<Exclude<T, LastOfUnion<T>>>, LastOfUnion<T>];
