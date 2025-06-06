import type { FN } from './fn';
import type { ValueOf } from './value-of';

/**
 * @note preserves `Date`
 *
 * @see {@link ValueOf}
 *
 * @since 0.0.4
 * @modified 0.0.6
 * @modified 0.0.14 - Flattened the nesting
 */
export type ExtractValues<T, extractFnReturnType = false> = T extends FN<
    infer R
>
    ? extractFnReturnType extends true
        ? ExtractValues<R, true>
        : never
    : T extends Date
    ? T
    : T extends object
    ? ExtractValues<ValueOf<T>, extractFnReturnType>
    : T;
