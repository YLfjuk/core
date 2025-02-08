export type Reverse<T extends unknown[]> = T extends [...infer Rest, infer Last]
    ? [Last, ...Reverse<Rest>]
    : [];

// region Tests
type Test = Reverse<[1, 2, 3]>;
//   ^?
