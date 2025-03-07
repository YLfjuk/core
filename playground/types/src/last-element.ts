'use new';

type LastElement<Arr extends unknown[]> = Arr extends [...infer _, infer Last]
    ? Last
    : never;

type LastElement2<Arr extends unknown[]> = [never, ...Arr][Arr['length']];

// region Tests 1

type Test1_1 = LastElement<[]>;
//   ^?

type Test1_2 = LastElement<[1]>;
//   ^?

type Test1_3 = LastElement<['bob', 3125]>;
//   ^?

// region Tests 2

type Test2_1 = LastElement2<[]>;
//   ^?

type Test2_2 = LastElement2<[1]>;
//   ^?

type Test2_3 = LastElement2<['bob', 3125]>;
//   ^?
