/**
 * An infinitely nested record.
 *
 * @remarks Applies recursively.
 *
 * @since 0.0.9
 */
export type DeepDict<T = unknown> = {
	[key: string]: T | DeepDict<T>;
};
