import type { Abs } from "./abs.js";

/**
 * Checks whether `N` is greater than or equal to zero.
 *
 * @see {@link Abs}
 *
 * @since 0.0.10
 */
export type IsPositiveOrZero<N extends number> = Abs<N> extends N ? true : false;
