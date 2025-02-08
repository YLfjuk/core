import type { ExtractLiteral } from '@ylfjuk-core/types';
import type { Extends } from './extends';

type SplitSettings = { separator: string; extractLiterals?: boolean };
type DefaultSplitSettings = { separator: ''; extractLiterals: false };

type BuildSeparator<
    T extends string,
    Settings extends SplitSettings
> = T extends `${infer U}${Settings['separator']}${infer Rest}`
    ? [
          Settings['extractLiterals'] extends true ? ExtractLiteral<U> : U,
          ...BuildSeparator<Rest, Settings>
      ]
    : T extends ''
    ? []
    : [Settings['extractLiterals'] extends true ? ExtractLiteral<T> : T];

export type Split<
    T extends string,
    Settings extends SplitSettings = DefaultSplitSettings
> = T extends `${infer U}${Settings['separator']}${infer Rest}`
    ? [
          Settings['extractLiterals'] extends true ? ExtractLiteral<U> : U,
          ...Split<Rest, Settings>
      ]
    : T extends ''
    ? []
    : [Settings['extractLiterals'] extends true ? ExtractLiteral<T> : T];

// region Tests

type Test = Split<'bert'>;
//   ^?

type Test2 = Split<'bob_bert', { separator: '_' }>;
//   ^?

type FloatStr = Split<`${6.00566}`, { separator: '.' }>;
//   ^?

type FloatPointStr = Split<
    FloatStr[1],
    { separator: ''; extractLiterals: true }
>;

type Numbers = Split<`${13}-${200}`, { separator: '-'; extractLiterals: true }>;
//   ^?
