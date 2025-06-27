/**
 * Checks if a string ends with a specific suffix.
 *
 * @note A wrapper around {@link String.prototype.endsWith} that narrows the type to a template literal type.
 */
export const strEndsWith = <const P extends string>(
    str: string,
    suffix: P
): str is `${string}${P}` => str.endsWith(suffix);
