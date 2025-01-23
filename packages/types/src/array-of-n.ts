import type { Abs } from './abs';

/**
 * @param Amount - amount of zeros
 * @param Limit - exclusive upper bound
 * @param Acc - A prior accumulation of 0[]
 * @param Fill - What to fill the array with
 */
export type ArrayOfN<
    Amount extends number,
    Limit extends number = -1,
    Acc extends Fill[] = [],
    Fill = 0
> = Abs<Amount> extends Amount
    ? Acc['length'] extends Limit
        ? never
        : Acc['length'] extends Amount
        ? Acc
        : ArrayOfN<Amount, Limit, [...Acc, Fill], Fill>
    : never;
