/**
 * Checks if a string ends with a specific suffix.
 *
 * @remarks Wraps {@link String.prototype.endsWith} while narrowing to a template literal type.
 *
 * @since 0.0.8
 */
export const endsWith = <const P extends string>(str: string, suffix: P): str is `${string}${P}` =>
	str.endsWith(suffix);
