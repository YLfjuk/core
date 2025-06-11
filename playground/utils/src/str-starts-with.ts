export const strStartsWith = <const P extends string>(
    str: string,
    prefix: P
): str is `${P}${string}` => str.startsWith(prefix);
