export type ValueOf<T> = T[keyof T];

export type Prettify<T> = {
    [K in keyof T]: T[K];
} & {};

export type Extend<T, Ext extends Partial<Record<keyof T, unknown>>> = {
    [K in keyof T]: K extends keyof Ext ? T[K] | Ext[K] : T[K];
};

export type AutoCompleteStr<T> = T | (string & {});
