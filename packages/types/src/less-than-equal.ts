import type { Equal } from './equal';
import type { LessThan } from './less-than';

/**
 * @description
 * A, B ∈ ℤ (integers)
 *
 * @note does not support float values
 *
 * @see {@link Equal}
 * @see {@link LessThan}
 *
 * @since 0.0.12
 */
export type LessThanEqual<A extends number, B extends number> = Equal<
    A,
    B
> extends true
    ? true
    : LessThan<A, B>;
