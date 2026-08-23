import type { FN } from "./fn.js";
import type { ValueOf } from "./value-of.js";

/**
 * @remarks Applies recursively while preserving `Date`.
 *
 * @see {@link ValueOf}
 *
 * @since 0.0.4
 */
export type ExtractValues<T, extractFnReturnType = false> =
	T extends FN<infer R>
		? extractFnReturnType extends true
			? ExtractValues<R, true>
			: never
		: T extends Date
			? T
			: T extends object
				? ExtractValues<ValueOf<T>, extractFnReturnType>
				: T;
