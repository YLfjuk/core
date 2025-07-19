/**
 * Gets the keys of an object as an array.
 *
 * @note A wrapper around {@link Object.keys} that retains the type of the keys.
 *
 * @since 0.0.8
 * @modified 0.0.10
 */
export const keys = <const T extends object>(obj: T): (keyof T)[] =>
	Object.keys(obj) as (keyof T)[];
