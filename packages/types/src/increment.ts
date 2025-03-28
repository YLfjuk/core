import type { ArrayOfN } from './array-of-n';
import type { IsPositiveOrZero } from './is-positive-or-zero';

/**
 * @param N ∈ ℕ
 *
 * @note does not support negative/float values
 *
 * @see {@link IsPositiveOrZero}
 * @see {@link ArrayOfN}
 *
 * @since 0.0.10
 */
export type Increment<N extends number> = IsPositiveOrZero<N> extends true
    ? [...ArrayOfN<N>, N]['length']
    : 'Error: Unsupported numeric value';

// TODO: add support for Z, R values
