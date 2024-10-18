/**
 * Type to intersect a union type.
 * See {@link https://fettblog.eu/typescript-union-to-intersection/}
 * @typeParam U - union
 * @example
 * ```
 * UnionToIntersection<{ foo: string } | { bar: number }>
 *   = { foo: string; bar: number }
 * ```
 */
export type UnionToIntersection<T> = (
    T extends any ? (x: T) => any : never
) extends (x: infer R) => any
    ? R
    : never;

export type IsDisjointUnion<T> = UnionToIntersection<T> extends never
    ? true
    : false;
