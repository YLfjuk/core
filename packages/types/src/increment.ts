import type { ArrayOfN } from "./array-of-n.js";
import type { IsPositiveOrZero } from "./is-positive-or-zero.js";

/**
 * Increments a numeric value by one.
 *
 * @remarks Negative and fractional literals return `"Error: Unsupported numeric value"`.
 * Broad `number` and `any` return `number`; unions distribute and `never` stays `never`.
 * Tuple construction through {@link ArrayOfN} remains subject to compiler recursion limits.
 *
 * @template N ∈ ℕ
 *
 * @see {@link IsPositiveOrZero}
 * @see {@link ArrayOfN}
 *
 * @since 0.0.10
 */
export type Increment<N extends number> = N extends unknown
	? number extends N
		? number
		: `${N}` extends `${bigint}`
			? IsPositiveOrZero<N> extends true
				? [...ArrayOfN<N>, N]["length"]
				: "Error: Unsupported numeric value"
			: "Error: Unsupported numeric value"
	: never;
