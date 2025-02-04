import type { Primitive } from './primitive';

/**
 * @see {@link Primitive}
 *
 * @since 0.0.8
 * @modified 0.0.9
 */
export type ExtractLiteral<T extends string> =
    T extends `${infer U extends Exclude<Primitive, string | symbol>}` ? U : T;
