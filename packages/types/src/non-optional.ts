/**
 * @description makes all keys required while preserving their nullability
 *
 * @note {@link Required} can be used directly with the `tsconfig` flag `exactOptionalPropertyTypes` set to `true`
 *
 * @remarks
 * The type can also be described as `PreserveUndefined`, `LeanRequired`, `LaxRequired` or `SofRequired`
 *
 * @since 0.0.14
 */
export type NonOptional<T> = {
    [K in keyof (T & Required<T>)]: T[K];
};
