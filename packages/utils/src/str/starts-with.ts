/**
 * Checks if a string starts with a specific prefix.
 *
 * @remarks Wraps {@link String.prototype.startsWith} while narrowing to a template literal type.
 *
 * @since 0.0.8
 */
export const startsWith = <const P extends string>(
	str: string,
	prefix: P,
): str is `${P}${string}` => str.startsWith(prefix);
