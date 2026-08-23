import type { Primitive } from "./primitive.js";

/**
 * A primitive or object with a `toString` method.
 *
 * @see {@link Primitives}
 *
 * @since 0.0.14
 */
export type Stringifiable =
	| Exclude<Primitive, symbol>
	| {
			toString(): string;
	  };
