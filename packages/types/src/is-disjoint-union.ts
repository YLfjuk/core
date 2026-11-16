import type { UnionToIntersection } from "./union-to-intersection.js";

/**
 * Identifies unions whose members cannot share a value.
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
