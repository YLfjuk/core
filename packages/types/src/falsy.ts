/**
 * A type that represents all representable falsy values in TypeScript.
 *
 * @remarks Does not include `NaN`, which cannot be represented as a type.
 *
 * @since 0.0.16
 */
export type Falsy = false | 0 | "" | null | undefined | 0n;
