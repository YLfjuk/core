export type ValueOf<T> = T[keyof T];

export type Prettify<T> = {
    [K in keyof T]: T[K];
} & {};

export type Extend<T, Ext extends Partial<Record<keyof T, unknown>>> = {
    [K in keyof T]: K extends keyof Ext ? T[K] | Ext[K] : T[K];
};

export type AutoCompleteStr<T> = T | (string & {});

export type Maybe<T> = T | null | undefined;

export type MappedEnum<E extends string> = { [K in E]: K };

export type ExtractValues<T, extractFnReturnType = false> = T extends FN<
    infer R
>
    ? extractFnReturnType extends true
        ? ExtractValues<R, true>
        : never
    : T extends object
    ? T extends Date
        ? T
        : ExtractValues<ValueOf<T>, extractFnReturnType>
    : T;

export type StrictOmit<T, K extends keyof T> = Omit<T, K>;

export type FN<Return = any, Args = any> = (...args: Args[]) => Return;

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

export type IsDisjointUnion<T> = UnionToIntersection<T> extends never ? true : false;