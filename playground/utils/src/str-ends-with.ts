export const strEndsWith = <const P extends string>(
    str: string,
    suffix: P
): str is `${string}${P}` => str.endsWith(suffix);
