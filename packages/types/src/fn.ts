/**
 * Represents a function with configurable return, argument, and `this` types.
 *
 * @since 0.0.5
 */
export type FN<Return = any, Args extends any[] = any[], This = any> = (
	this: This,
	...args: Args
) => Return;

/**
 * Alias for {@link FN}.
 *
 * @since 0.0.19
 */
export type { FN as Func };
