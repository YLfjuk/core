import type { ArrayOfN, IsPositiveOrZero } from '@ylfjuk-core/types';

/**
 * @param N ∈ ℕ
 * @note does not support negative/float values
 *
 * @since 0.0.10
 */
export type Decrement<N extends number> = IsPositiveOrZero<N> extends true
    ? ArrayOfN<N> extends [...infer Rest, infer _]
        ? Rest['length']
        : never
    : 'Error: Unsupported numeric value';

// TODO: add support for Z, R values

type Test = Decrement<6>;
//   ^?
