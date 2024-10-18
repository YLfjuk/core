export type ValueOf<T> = T[keyof T];

export type Maybe<T> = T | null | undefined;

export type StrictOmit<T, K extends keyof T> = Omit<T, K>;

export type FN<Return = any, Args = any> = (...args: Args[]) => Return;
