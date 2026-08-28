/**
 * Gets the keys of an object as an array.
 *
 * @remarks Wraps {@link Object.keys} while retaining key types.
 *
 * @since 0.0.8
 */
export const keys = <const T extends object>(obj: T): (keyof T)[] =>
	Object.keys(obj) as (keyof T)[];
