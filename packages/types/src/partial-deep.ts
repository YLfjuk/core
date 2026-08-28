/**
 * Recursively makes every property in `T` optional.
 *
 * @remarks Applies recursively while preserving `Date`.
 *
 * @example
 * ```ts
 * type Example = { a: number; nested: { b: string } };
 * type Result = PartialDeep<Example>;
 * // Result: { a?: number; nested?: { b?: string } }
 * ```
 *
 * @since 0.0.14
 */
export type PartialDeep<T> = T extends Date
	? Date
	: T extends object
		? {
				[K in keyof T]?: PartialDeep<T[K]>;
			}
		: T;
