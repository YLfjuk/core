import type { Abs } from './abs';
import type { ArrayOfN } from './array-of-n';
import type { IsNatural } from './is-natural';

/**
 * @description
 * A, B - ℤ (integers)
 *
 * @note does not work for floats
 */
export type LessThan<
    A extends number,
    B extends number
> = IsNatural<A> extends true
    ? IsNatural<B> extends true
        ? ArrayOfN<A, B> extends never
            ? false
            : true
        : false
    : IsNatural<B> extends true
    ? true
    : LessThan<Abs<B>, Abs<A>>;
