import type { Abs } from "./abs.js";

/**
 * Builds a tuple of nonnegative integer length, preserving a fixed {@link Acc} prefix.
 *
 * @remarks Broad numeric inputs or an array accumulator return `Fill[]`.
 * Unsupported literals, optional accumulators, and accumulators past Amount or
 * a nonnegative Limit return `never`. Negative integer limits disable the bound.
 * Unions distribute. Large tuples remain subject to compiler recursion limits.
 *
 * @template Amount - amount of {@link Fill}
 * @template Limit - exclusive upper bound
 * @template Acc - A prior accumulation of {@link Fill}[]
 * @template Fill - What to fill the array with
 *
 * @since 0.0.10
 */
export type ArrayOfN<
	Amount extends number,
	Limit extends number = -1,
	Acc extends Fill[] = [],
	Fill = 0,
> = Amount extends unknown
	? Limit extends unknown
		? Acc extends unknown
			? number extends Amount | Limit | Acc["length"]
				? Fill[]
				: `${Amount}` extends `${bigint}`
					? `${Limit}` extends `${bigint}`
						? Abs<Amount> extends Amount
							? Acc extends Required<Acc>
								? `${Amount}` extends keyof Acc
									? never
									: `${Limit}` extends keyof Acc
										? never
										: BuildArray<Amount, Limit, Acc, Fill>
								: never
							: never
						: never
					: never
			: never
		: never
	: never;

type BuildArray<
	Amount extends number,
	Limit extends number,
	Acc extends Fill[],
	Fill,
> = Acc["length"] extends Limit
	? never
	: Acc["length"] extends Amount
		? Acc
		: BuildArray<Amount, Limit, [...Acc, Fill], Fill>;
