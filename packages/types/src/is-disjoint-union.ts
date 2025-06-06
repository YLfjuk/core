import type { UnionToIntersection } from './union-to-intersection';

/**
 * @see {@link UnionToIntersection}
 *
 * @since 0.0.7
 *
 *
 * /
/**
 * Checks if a type `T` is a union type.
 *
 * A union type is a type that can be one of several types. This utility type uses the `UnionToIntersection`
 * utility to convert the union type into an intersection type. If the result is `never`, it indicates that
 * the original type was a union.
 *
 * @note Objects will always be considered to have an intersection
 *
 * @see {@link UnionToIntersection}
 *
 * @template T The type to check.
 *
 * @example
 * ```ts
 * type A = IsUnion<string | number>; // true
 * type B = IsUnion<string>; // false
 * ```
 *
 * @since 0.0.7
 */
export type IsDisjointUnion<T> = UnionToIntersection<T> extends never
    ? true
    : false;
