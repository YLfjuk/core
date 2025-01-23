import type { Equal } from './equal';
import type { LessThan } from './less-than';

/**
 * @description
 * A, B ∈ ℤ (integers)
 *
 * @note does not support float values
 */
export type LessThanEqual<A extends number, B extends number> = Equal<
    A,
    B
> extends true
    ? true
    : LessThan<A, B>;
