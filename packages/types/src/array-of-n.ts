import type { Abs } from './abs';

/**
 * @param Amount - amount of {@link Fill}
 * @param Limit - exclusive upper bound
 * @param Acc - A prior accumulation of {@link Fill}[]
 * @param Fill - What to fill the array with
 *
 * @since 0.0.10
 * @modified 0.0.12 - Now accepts any type for {@link Fill}
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
