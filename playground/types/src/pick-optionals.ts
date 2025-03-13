'use new';

// TODO: Try to preserve the original type (`| undefined` or no `| undefined`) | works with `exactOptionalPropertyTypes` set to true
export type PickOptionals<T> = {
    [K in keyof T as T[K] extends Required<T>[K] ? never : K]: T[K];
};

// region Tests
type Test = PickOptionals<{ bob: number; bert?: string }>;
//   ^?
