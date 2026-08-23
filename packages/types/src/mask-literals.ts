import type { InverseExtract } from "./inverse-extract.js";
import type { Primitive } from "./primitive.js";

/**
 * Widens literal types to their primitive forms.
 *
 * @remarks This is the inverse of `ExtractLiteral`. An equivalent conditional definition is:
 *
 * @see {@link Primitive}
 *
 * @example
 * ```ts
 * type MaskedLiteral = ExtractLiterals<56>; //? number
 * ```
 *
 * ```ts
 * type MaskLiterals<T> =
 *      T extends infer U ?
 *          U extends number ? number
 *          : U extends string ? string
 *              : U extends boolean ? boolean
 *                  : etc...
 *      : never
 * ```
 *
 * `K extends boolean ? boolean : K` is used since boolean is often spread into `true | false`
 *
 * @since 0.0.9
 *
 * TODO: Support objects
 */
export type MaskLiterals<T extends Primitive> = {
	[K in Primitive as string]: InverseExtract<T, K extends boolean ? boolean : K>;
}[string];
