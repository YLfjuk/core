import type { Primitive } from './primitive';

export type ExtractLiteral<T extends string> =
    T extends `${infer U extends Exclude<Primitive, string>}` ? U : T;
