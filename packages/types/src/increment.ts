import type { ArrayOfN } from "./array-of-n.js";
import type { IsPositiveOrZero } from "./is-positive-or-zero.js";

/**
 * Increments a numeric value by one.
 *
 * @remarks Does not support negative or floating-point values.
 *
 * @template N ∈ ℕ
 *
 * @see {@link IsPositiveOrZero}
 * @see {@link ArrayOfN}
 *
 * @since 0.0.10
 */
export type Increment<N extends number> =
	IsPositiveOrZero<N> extends true
		? [...ArrayOfN<N>, N]["length"]
		: "Error: Unsupported numeric value";

// TODO: add support for Z, R values
