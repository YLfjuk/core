import type { Equals } from './equals';
import type { LessThan } from './less-than';

/**
 * @description
 * A, B ∈ ℤ (integers)
 *
 * @note does not support float values
 *
 * @see {@link Equals}
 * @see {@link LessThan}
 *
 * @since 0.0.12
 */
export type LessThanEqual<A extends number, B extends number> = Equals<
    A,
    B
> extends true
    ? true
    : LessThan<A, B>;
