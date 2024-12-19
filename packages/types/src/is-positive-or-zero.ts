import type { Abs } from './abs';

/**
 * @description
 * return N >= 0;
 */
export type IsPositiveOrZero<N extends number> = Abs<N> extends N
    ? true
    : false;
