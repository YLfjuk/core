import type { UnionToIntersection } from "./union-to-intersection.js";

/**
 * Checks whether the intersection produced by {@link UnionToIntersection} is `never`.
 *
 * @remarks This does not detect every union. Object members can have a non-never intersection.
 *
 * @example
 * ```ts
 * type A = IsDisjointUnion<string | number>; // true
 * type B = IsDisjointUnion<string>; // false
 * type C = IsDisjointUnion<{ a: string } | { b: number }>; // false
 * ```
 *
 * @since 0.0.7
 */
export type IsDisjointUnion<T> = UnionToIntersection<T> extends never ? true : false;
