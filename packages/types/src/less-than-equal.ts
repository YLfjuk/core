import type { Equals } from "./equals.js";
import type { LessThan } from "./less-than.js";

/**
 * Checks whether integer `A` is less than or equal to integer `B`.
 *
 * @remarks Does not support floating-point values.
 *
 * @see {@link Equals}
 * @see {@link LessThan}
 *
 * @since 0.0.12
 */
export type LessThanEqual<A extends number, B extends number> =
	Equals<A, B> extends true ? true : LessThan<A, B>;
