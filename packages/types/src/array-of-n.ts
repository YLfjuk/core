//? maybe change the order to check if eq before limit (would lead to change in less-than -> less-than-eq-to)

import type { Abs } from './abs';

/**
 * @param Amount - amount of zeros
 * @param Limit - exclusive upper bound
 * @param Acc - A prior accumulation of 0[]
 * @param Fill - A number to fill the array with
 */
export type ArrayOfN<
    Amount extends number,
    Limit extends number = -1,
    Acc extends Fill[] = [],
    Fill extends number = 0
> = Abs<Amount> extends Amount
    ? Acc['length'] extends Limit
        ? never
        : Acc['length'] extends Amount
        ? Acc
        : ArrayOfN<Amount, Limit, [...Acc, Fill], Fill>
    : never;
