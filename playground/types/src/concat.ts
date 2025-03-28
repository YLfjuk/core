type Settings = {
    element: unknown;
};

export type Concat<
    ArrA extends readonly Options['element'][],
    ArrB extends readonly Options['element'][],
    Options extends Settings = Settings
> = [...ArrA, ...ArrB];

// #region Tests

type Test = Concat<[1, 2, 3], ['a', 'b', 'c']>;
//   ^?

type Test2 = Concat<[1, 2, 3], [3, 2, 1], { element: number }>;
//   ^?
