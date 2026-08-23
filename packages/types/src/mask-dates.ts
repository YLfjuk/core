import type { Replace } from "./replace.js";

/**
 * Replaces `Date` with `string`.
 *
 * @remarks Useful for API responses and JSON data where dates are serialized as strings.
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
