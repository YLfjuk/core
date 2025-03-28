import type { UnknownArray } from '@ylfjuk-core/types';

export type Concat<ArrA extends UnknownArray, ArrB extends UnknownArray> = [
    ...ArrA,
    ...ArrB
];

// #region Tests

type Test = Concat<[1, 2, 3], ['a', 'b', 'c']>;
//   ^?
