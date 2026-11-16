/**
 * Omits properties whose values extend `Check`.
 *
 * @remarks Only top-level properties are checked; nested values are unchanged.
 *
 * @since 0.0.14
 */
export type OmitBy<T, Check> = {
	[K in keyof T as T[K] extends Check ? never : K]: T[K];
};
