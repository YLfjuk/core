import type { Not } from './not';

export type Some<T extends readonly unknown[], U = true> = Extract<
    T[number],
    U
> extends never
    ? false
    : true;

export type SomeN<T extends readonly unknown[], U = true> = Not<
    Extract<T[number], U>,
    never
>;

// region Tests
type Test = Some<[false]>;
//   ^?

type Test1 = Some<[]>;
//   ^?

type Test2 = Some<[true, true]>;
//   ^?

type Test3 = Some<[false, true]>;
//   ^?

type Test4 = Some<[], string>;
//   ^?

type Test5 = Some<['', 'sjfg', 5], string>;
//   ^?

type Test6 = Some<['', 'sjfg', 5, string], string>;
//   ^?

type Test7 = Some<['', 'sjfg', 5, string]>;
//   ^?
