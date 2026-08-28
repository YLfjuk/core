/**
 * Expands a type into a readable shape.
 *
 * @remarks Applies recursively while preserving `Date`.
 *
 * @since 0.0.1
 */
export type Prettify<T> = T extends Date
	? T
	: {
			[K in keyof T]: Prettify<T[K]>;
		};
