// TODO: Try to preserve the original type (`| undefined` or no `| undefined`)
export type PickOptionals<T> = Partial<{
    [K in keyof T as T[K] extends Required<T>[K] ? never : K]-?: T[K];
}>;

// region Tests
type Test = PickOptionals<{ bob: number; bert?: string }>;
//   ^?
