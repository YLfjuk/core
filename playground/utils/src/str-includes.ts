export const strIncludes = <const P extends string>(
    str: string,
    pattern: P
): str is `${string}${P}${string}` => str.includes(pattern);
