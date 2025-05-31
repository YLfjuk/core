/**
 * Checks if a type `T` is a union type.
 *
 * A union type is a type that can be one of several types. This utility type uses the `UnionToIntersection`
 * utility to convert the union type into an intersection type. If the result is `never`, it indicates that
 * the original type was a union.
 *
 * @template T The type to check.
 *
 * @example
 * ```ts
 * type A = IsUnion<string | number>; // true
 * type B = IsUnion<string>; // false
 * ```
 */
export type { IsDisjointUnion } from '@ylfjuk-core/types';
