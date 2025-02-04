import type { Abs } from './abs';

/**
 * @see {@link Abs}
 *
 * @description
 * return N >= 0;
 *
 * @previous IsNatural {@v 0.0.10}
 *
 * @since 0.0.10
 * @modified 0.0.11
 */
export type IsPositiveOrZero<N extends number> = Abs<N> extends N
    ? true
    : false;
