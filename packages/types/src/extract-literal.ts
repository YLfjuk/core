import type { Primitive } from "./primitive.js";

/**
 * Infers a primitive type from a string when possible; otherwise returns the string unchanged.
 *
 * @see {@link Primitive}
 *
 * @example
 * ```ts
 * type LiteralNumber = ExtractLiteral<"56">; //? 56
 * ```
 *
 * @since 0.0.8
 */
export type ExtractLiteral<T extends string> =
	T extends `${infer U extends Exclude<Primitive, string | symbol>}` ? U : T;
