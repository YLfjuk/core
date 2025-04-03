import type { Primitive } from './primitive';

/**
 * @description Extracts the literals from a string
 *
 * @note The opposite of MaskLiterals
 *
 * @see {@link Primitive}
 *
 * @example
 * type LiteralNumber = ExtractLiterals<'56'>; //? 56
 *
 * @since 0.0.8
 * @modified 0.0.9 {@breaking 💥}
 */
export type ExtractLiteral<T extends string> =
    T extends `${infer U extends Exclude<Primitive, string | symbol>}` ? U : T;
