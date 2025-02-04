/**
 * Type to intersect a union type.
 * @see {@link https://fettblog.eu/typescript-union-to-intersection/}
 * 
 * @typeParam U - union
 * @example
 * ```
 * UnionToIntersection<{ foo: string } | { bar: number }>
 *   = { foo: string; bar: number }
 * ```
 *
 * @since 0.0.7
 */
export type UnionToIntersection<T> = (
    T extends any ? (x: T) => any : never
) extends (x: infer R) => any
    ? R
    : never;
