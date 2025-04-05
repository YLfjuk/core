import type { Replace } from './replace';

/**
 * @description Masks the `Date` type as a `string`
 *
 * @note Useful for wrapping API response types or handling `JSON` data where `Date` objects are serialized as strings.
 *
 * @see {@link Replace}
 *
 * @example
 * ```ts
 * type Original = { createdAt: Date; details: { timestamp: Date; name: string } };
 * type Masked = MaskDates<Original>;
 * // Result: { createdAt: string; details: { timestamp: string; name: string } }
 * ```
 *
 * @since 0.0.14
 */
export type MaskDates<T> = Replace<T, Date, string>;
