'use ready';
'use new';

import type { ExtractLiteral } from '@ylfjuk-core/types';
import type { OptionalFallback } from './optional-fallback';

type Settings = { separator: string; extractLiterals?: boolean };
type DefaultSettings = { separator: ''; extractLiterals: false };

type BuildSeparator<
    T extends string,
    Options extends Settings
> = T extends `${infer U}${Options['separator']}${infer Rest}`
    ? [
          Options['extractLiterals'] extends true ? ExtractLiteral<U> : U,
          ...BuildSeparator<Rest, Options>
      ]
    : T extends ''
    ? []
    : [Options['extractLiterals'] extends true ? ExtractLiteral<T> : T];

export type Split<
    T extends string,
    Options extends Settings = DefaultSettings
> = BuildSeparator<T, OptionalFallback<Settings, Options, DefaultSettings>>;

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
