import type { FN } from './fn';
import type { ValueOf } from './value-of';

export type ExtractValues<T, extractFnReturnType = false> = T extends FN<
    infer R
>
    ? extractFnReturnType extends true
        ? ExtractValues<R, true>
        : never
    : T extends object
    ? T extends Date
        ? T
        : ExtractValues<ValueOf<T>, extractFnReturnType>
    : T;
