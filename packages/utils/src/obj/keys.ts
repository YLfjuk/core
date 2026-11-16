/**
 * Gets the keys of an object as an array.
 *
 * @remarks Wraps {@link Object.keys} while retaining stringified key types.
 *
 * @since 0.0.8
 */
export const keys = <const T extends object>(
	obj: T,
): (Extract<keyof T, string> | `${Extract<keyof T, number>}`)[] =>
	Object.keys(obj) as (Extract<keyof T, string> | `${Extract<keyof T, number>}`)[];
