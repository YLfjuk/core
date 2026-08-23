/**
 * Makes every key required while preserving nullability.
 *
 * @remarks
 * Use `Required` directly when `exactOptionalPropertyTypes` is enabled. This type is also known as
 * `PreserveUndefined`, `LeanRequired`, `LaxRequired`, or `SoftRequired`.
 *
 * @since 0.0.14
 */
export type NonOptional<T> = {
	[K in keyof Required<T>]: T[K];
};
