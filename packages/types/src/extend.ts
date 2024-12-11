export type Extend<T, Ext extends Partial<Record<keyof T, unknown>>> = {
    [K in keyof T]: K extends keyof Ext ? T[K] | Ext[K] : T[K];
};
