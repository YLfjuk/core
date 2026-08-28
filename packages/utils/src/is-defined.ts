/**
 * Checks whether a value is neither `null` nor `undefined`.
 *
 * @since 0.0.1
 */
export const isDefined = (value: unknown): value is NonNullable<unknown> =>
	value !== null && value !== undefined;
