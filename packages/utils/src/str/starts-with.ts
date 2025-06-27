/**
 * Checks if a string starts with a specific prefix.
 *
 * @note A wrapper around {@link String.prototype.startsWith} that narrows the type to a template literal type.
 */
export const strStartsWith = <const P extends string>(
    str: string,
    prefix: P
): str is `${P}${string}` => str.startsWith(prefix);
