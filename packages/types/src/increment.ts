import type { ArrayOfN } from './array-of-n';
import type { IsPositiveOrZero } from './is-positive-or-zero';

/**
 * @description Increments a numeric value by 1
 *
 * @note does not support negative/float values
 *
 * @template N ∈ ℕ
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
