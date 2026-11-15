/**
 * Extracts the optional properties from `T`.
 *
 * @remarks Preserves property modifiers and value types with either `exactOptionalPropertyTypes` setting.
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
	[K in keyof T as {} extends Pick<T, K> ? K : never]: T[K];
};
