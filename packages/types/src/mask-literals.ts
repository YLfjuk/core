import type { InverseExtract } from "./inverse-extract.js";
import type { Primitive } from "./primitive.js";

/**
 * Widens literal types to their primitive forms.
 *
 * @see {@link Primitive}
 *
 * @example
 * ```ts
 * type MaskedLiteral = MaskLiterals<56>; //? number
 * ```
 *
 * @since 0.0.9
 */
export type MaskLiterals<T extends Primitive> = {
	[K in Primitive as string]: InverseExtract<T, K extends boolean ? boolean : K>;
}[string];
