'use ready';
'use new';

import type { Primitive } from '@ylfjuk-core/types';

type Settings = { separator: string };
type DefaultSettings = { separator: '' };

// TODO: expose
type Stringifiable = Exclude<Primitive, symbol>;

export type Join<
    T extends Stringifiable[],
    Options extends Settings = DefaultSettings
> = T extends [
    infer S extends Stringifiable,
    ...infer Rest extends Stringifiable[]
]
    ? `${S}${Join<Rest, Options> extends infer U extends string
          ? U extends ''
              ? ''
              : `${Options['separator']}${U}`
          : ''}`
    : '';

// region Tests

type Test = Join<[1, 2, 3, 'bob'], { separator: '-' }>;
//   ^?
