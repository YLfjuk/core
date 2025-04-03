/**
 * @description Extracts optional properties from a given type `T`
 *
 * @note Does not preserve `exactOptionalPropertyTypes` unless `exactOptionalPropertyTypes` flag is set to true in the `tsconfig`
 *
 * @example
 * ```ts
 * type Example = { a: number; b?: string; c?: boolean; d: string };
 * type Result = PickOptional<Example>;
 * // Result: { b?: string; c?: boolean }
 * ```
 *
 * @since 0.0.14
 */
export type PickOptional<T> = {
    [K in keyof T as T[K] extends Required<T>[K] ? never : K]: T[K];
};
