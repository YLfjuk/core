import type { ArrayOfN } from './array-of-n';
import type { IsPositiveOrZero } from './is-positive-or-zero';

/**
 * @param N ∈ ℕ
 * @note does not support negative/float values
 */
export type Increment<N extends number> = IsPositiveOrZero<N> extends true
    ? [...ArrayOfN<N>, N]['length']
    : 'error: Unsupported numeric value';

// TODO: add support for Z, R values
