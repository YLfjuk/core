import type { Equals } from "./equals.js";
import type { LessThan } from "./less-than.js";

/**
 * Checks whether integer `A` is less than or equal to integer `B`.
 *
 * @remarks Fractional literals return `never`. Broad `number` or `any` inputs
 * return `boolean`; unions distribute and `never` stays `never`.
 * Integer magnitudes remain subject to {@link LessThan} compiler recursion limits.
 *
 * @see {@link Equals}
 * @see {@link LessThan}
 *
 * @since 0.0.12
 */
export type LessThanEqual<A extends number, B extends number> = A extends unknown
	? B extends unknown
		? number extends A | B
			? boolean
			: `${A}` extends `${bigint}`
				? `${B}` extends `${bigint}`
					? Equals<A, B> extends true
						? true
						: LessThan<A, B>
					: never
				: never
		: never
	: never;
