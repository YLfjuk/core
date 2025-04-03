import type { Abs } from './abs';

/**
 * @template Amount - amount of {@link Fill}
 * @template Limit - exclusive upper bound
 * @template Acc - A prior accumulation of {@link Fill}[]
 * @template Fill - What to fill the array with
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
