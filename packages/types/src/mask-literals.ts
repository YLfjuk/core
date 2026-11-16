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
 * @example A naive conditional approach:
 * ```ts
 * type NaiveMaskLiterals<T extends Primitive> =
 *   T extends number ? number :
 *   T extends string ? string :
 *   T extends boolean ? boolean :
 *   T extends bigint ? bigint :
 *   T extends symbol ? symbol : T;
 * ```
 *
 * @since 0.0.9
 */
export type MaskLiterals<T extends Primitive> = {
	[K in Primitive as string]: InverseExtract<T, K extends boolean ? boolean : K>;
}[string];
