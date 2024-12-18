import type { Abs } from './abs';

/**
 * @description
 * return N ∈ ℕ;
 * returns whether N is an element of ℕ
 */
export type IsNatural<N extends number> = Abs<N> extends N ? true : false;
