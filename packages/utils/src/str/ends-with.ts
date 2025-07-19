/**
 * Checks if a string ends with a specific suffix.
 *
 * @note A wrapper around {@link String.prototype.endsWith} that narrows the type to a template literal type.
 *
 * @since 0.0.8
 * @modified 0.0.10
 */
export const endsWith = <const P extends string>(str: string, suffix: P): str is `${string}${P}` =>
	str.endsWith(suffix);
