import type { Abs } from "./abs.js";
import type { ArrayOfN } from "./array-of-n.js";
import type { IsPositiveOrZero } from "./is-positive-or-zero.js";

/**
 * Checks whether integer `A` is less than integer `B`.
 *
 * @remarks Does not support floating-point values.
 *
 * @see {@link IsPositiveOrZero}
 * @see {@link ArrayOfN}
 * @see {@link LessThan}
 * @see {@link Abs}
 *
 * @since 0.0.10
 */
export type LessThan<A extends number, B extends number> =
	IsPositiveOrZero<A> extends true
		? IsPositiveOrZero<B> extends true
			? ArrayOfN<A, B> extends never
				? false
				: true
			: false
		: IsPositiveOrZero<B> extends true
			? true
			: LessThan<Abs<B>, Abs<A>>;
