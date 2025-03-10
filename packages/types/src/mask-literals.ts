import type { InverseExtract } from './inverse-extract';
import type { Primitive } from './primitive';

/**
 * @description Masks the literals as their primitive form
 *
 * @note The opposite of ExtractLiteral
 *
 * @example
 * type MaskedLiteral = ExtractLiterals<56>; //? number
 *
 * @see {@link Primitive}
 *
 * @alternative
 * works the same as
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
 * @modified 0.0.10
 * @modified 0.0.14 - Only accepts {@link Primitive}
 */
export type MaskLiterals<T extends Primitive> = {
    [K in Primitive as string]: InverseExtract<
        T,
        K extends boolean ? boolean : K
    >;
}[string];
