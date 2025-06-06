/**
 * @description A type guard that checks if a value is defined (not `null` or `undefined`).
 *
 * @since 0.0.1
 */
export const isDefined = (value: unknown): value is NonNullable<unknown> =>
    value != null;
