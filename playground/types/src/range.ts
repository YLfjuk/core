import type { LessThan, LessThanEqual } from '@ylfjuk-core/types';

// TODO: add support for floats
// TODO: handle negative values
type BuildRange<
    Start extends number,
    End extends number,
    Acc extends (number | unknown)[] = []
> = Acc['length'] extends End
    ? Acc
    : BuildRange<
          Start,
          End,
          [
              ...Acc,
              LessThan<Acc['length'], Start> extends true
                  ? unknown //! is this really necessary?
                  : Acc['length']
          ]
      >;

type FilterRange<Acc extends (number | unknown)[]> = Acc extends [
    ...infer Rest extends (number | unknown)[],
    infer N
]
    ? N extends number
        ? [...FilterRange<Rest>, N]
        : FilterRange<Rest>
    : [];

export type Range<
    Start extends number,
    End extends number,
    Settings extends { inclusive: boolean } = { inclusive: false }
> = LessThanEqual<Start, End> extends true
    ? Settings['inclusive'] extends true
        ? [...FilterRange<BuildRange<Start, End>>, End]
        : FilterRange<BuildRange<Start, End>>
    : never;

type Test = Range<1, 5>;
//   ^?

type Test2 = Range<5, 5>;
//   ^?

type Test3 = Range<5, 5, { inclusive: true }>;
//   ^?

type Test4 = Range<5, 2>;
//   ^?

// TODO: handle negative values
type Test5 = Range<-1, 5>;
//   ^?

type Test6 = Range<0.5, 2>;
//   ^?
