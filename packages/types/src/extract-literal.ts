import type { Primitive } from "./primitive.js";

/**
 * Extracts literal types from a string.
 *
 * @remarks The inverse of `MaskLiterals`.
 *
 * @see {@link Primitive}
 *
 * @example
 * ```ts
 * type LiteralNumber = ExtractLiterals<'56'>; //? 56
 * ```
 *
 * @since 0.0.8
 */
export type ExtractLiteral<T extends string> =
	T extends `${infer U extends Exclude<Primitive, string | symbol>}` ? U : T;
