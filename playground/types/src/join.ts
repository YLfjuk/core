import type { Primitive } from '@ylfjuk-core/types';

type JoinSettings = { separator: string };
type DefaultJoinSettings = { separator: '' };

type Stringifiable = Exclude<Primitive, symbol>;

type BuildStr<
    T extends Stringifiable[],
    Settings extends JoinSettings
> = T extends [
    infer S extends Stringifiable,
    ...infer Rest extends Stringifiable[]
]
    ? `${S}${BuildStr<Rest, Settings> extends infer U extends string
          ? U extends ''
              ? ''
              : `${Settings['separator']}${U}`
          : ''}`
    : '';

export type Join<
    T extends Stringifiable[],
    Settings extends JoinSettings = DefaultJoinSettings
> = BuildStr<T, Settings>;

// region Tests

type Test = Join<[1, 2, 3, 'bob'], { separator: '-' }>;
//   ^?
