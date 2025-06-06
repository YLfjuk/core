import type { Abs } from './abs';
import type { ArrayOfN } from './array-of-n';
import type { IsPositiveOrZero } from './is-positive-or-zero';

/**
 * @description
 * A, B ∈ ℤ (integers)
 *
 * @note does not support float values
 *
 * @see {@link IsPositiveOrZero}
 * @see {@link ArrayOfN}
 * @see {@link LessThan}
 * @see {@link Abs}
 *
 * @since 0.0.10
 */
export type LessThan<
    A extends number,
    B extends number
> = IsPositiveOrZero<A> extends true
    ? IsPositiveOrZero<B> extends true
        ? ArrayOfN<A, B> extends never
            ? false
            : true
        : false
    : IsPositiveOrZero<B> extends true
    ? true
    : LessThan<Abs<B>, Abs<A>>;
