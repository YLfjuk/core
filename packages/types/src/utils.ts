import type { FN, ValueOf } from './common';

export type Prettify<T> = {
    [K in keyof T]: T[K];
} & {};

export type Extend<T, Ext extends Partial<Record<keyof T, unknown>>> = {
    [K in keyof T]: K extends keyof Ext ? T[K] | Ext[K] : T[K];
};

export type AutoCompleteStr<T> = T | (string & {});

export type MappedEnum<E extends string> = { [K in E]: K };

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
