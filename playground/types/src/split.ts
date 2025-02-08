import type { ExtractLiteral } from '@ylfjuk-core/types';
import type { Extends } from './extends';

type SplitSettings = { splitter: string; extractLiterals?: boolean };
type DefaultSplitSettings = { splitter: ''; extractLiterals: false };

type BuildSplitter<
    T extends string,
    Settings extends SplitSettings = DefaultSplitSettings
> = T extends `${infer U}${Settings['splitter']}${infer Rest}`
    ? [
          Settings['extractLiterals'] extends true ? ExtractLiteral<U> : U,
          ...BuildSplitter<Rest, Settings>
      ]
    : T extends ''
    ? []
    : [Settings['extractLiterals'] extends true ? ExtractLiteral<T> : T];

export type Split<
    T extends string,
    Settings extends SplitSettings = DefaultSplitSettings
> = Extends<Settings, SplitSettings> extends true
    ? BuildSplitter<T, Settings>
    : 'Error';

// region Tests

type Test2 = Split<'bob_bert', { splitter: '_' }>;
//   ^?

type FloatStr = Split<`${6.00566}`, { splitter: '.' }>;
//   ^?

type FloatPointStr = Split<
    FloatStr[1],
    { splitter: ''; extractLiterals: true }
>;

type Numbers = Split<`${13}-${200}`, { splitter: '-'; extractLiterals: true }>;
//   ^?
