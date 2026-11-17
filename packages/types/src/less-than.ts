import type { Abs } from "./abs.js";
import type { ArrayOfN } from "./array-of-n.js";
import type { IsPositiveOrZero } from "./is-positive-or-zero.js";

/**
 * Checks whether integer `A` is less than integer `B`.
 *
 * @remarks Fractional literals return `never`. Broad `number` or `any` inputs
 * return `boolean`; unions distribute and `never` stays `never`.
 * Integer magnitudes remain subject to {@link ArrayOfN} compiler recursion limits.
 *
 * @see {@link IsPositiveOrZero}
 * @see {@link ArrayOfN}
 * @see {@link LessThan}
 * @see {@link Abs}
 *
 * @since 0.0.10
 */
export type LessThan<A extends number, B extends number> = A extends unknown
	? B extends unknown
		? number extends A | B
			? boolean
			: `${A}` extends `${bigint}`
				? `${B}` extends `${bigint}`
					? IsPositiveOrZero<A> extends true
						? IsPositiveOrZero<B> extends true
							? ArrayOfN<A, B> extends never
								? false
								: true
							: false
						: IsPositiveOrZero<B> extends true
							? true
							: LessThan<Abs<B>, Abs<A>>
					: never
				: never
		: never
	: never;
