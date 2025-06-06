import type { Abs } from './abs';

/**
 * @description
 * return N >= 0;
 *
 * @see {@link Abs}
 *
 * @previous IsNatural {@v 0.0.10}
 *
 * @since 0.0.10
 * @modified 0.0.11 {@breaking 💥}
 */
export type IsPositiveOrZero<N extends number> = Abs<N> extends N
    ? true
    : false;
