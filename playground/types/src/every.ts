import type { Extends } from '@ylfjuk-core/types';

export type Every<T extends readonly unknown[], U = true> = Extends<
    T[number],
    U
>;

type Test = Every<[]>;
//   ^?

type Test2 = Every<[true, true]>;
//   ^?

type Test3 = Every<[false, true]>;
//   ^?

type Test4 = Every<[], string>;
//   ^?

type Test5 = Every<['', 'sjfg'], string>;
//   ^?
