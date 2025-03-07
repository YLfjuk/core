'use ready';
'use new';

import type { Join } from './join';
import type { Reverse } from './reverse';
import type { Split } from './split';

type ReverseSettings = { separator: string };
type DefaultReverseSettings = { separator: '' };

/**
 * @see {@link Reverse}
 * @see {@link Join}
 * @see {@link Split}
 */
export type ReverseStr<
    T extends string,
    Settings extends ReverseSettings = DefaultReverseSettings
> = Join<Reverse<Split<T, Settings>>, Settings>;

// region Tests
type Test = ReverseStr<'bert'>;
//   ^?

type Test2 = ReverseStr<'bert_bob'>;
//   ^?

type Test3 = ReverseStr<'bert_bob', { separator: '_' }>;
//   ^?
