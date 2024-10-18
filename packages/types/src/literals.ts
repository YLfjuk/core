/**
 * @description
 * supports
 * ```ts
 *`${string | number | bigint | boolean | null | undefined}`
 * ```
 */
export type ExtractLiteral<T extends string> = T extends `${number}`
    ? number
    : T extends `${bigint}`
    ? bigint
    : T extends `${boolean}`
    ? boolean
    : T extends `${null}`
    ? null
    : T extends `${undefined}`
    ? undefined
    : T;
