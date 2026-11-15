/**
 * Gets the keys of an object as an array.
 *
 * @remarks Returns own enumerable string keys, with numeric keys stringified and symbols omitted.
 * Types reflect the declared shape only. Structurally typed objects can have extra runtime
 * keys, so the inferred union is not an exhaustive runtime guarantee.
 *
 * @since 0.0.8
 */
export const keys = <const T extends object>(
	obj: T,
): (Extract<keyof T, string> | `${Extract<keyof T, number>}`)[] =>
	Object.keys(obj) as (Extract<keyof T, string> | `${Extract<keyof T, number>}`)[];
