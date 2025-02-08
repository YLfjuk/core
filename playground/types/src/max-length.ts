import type { LessThan } from '@ylfjuk-core/types';
import type { Length } from './length';

export type MaxStrLen<T extends string, Cap extends number> = LessThan<
    Length<T>,
    Cap
> extends true
    ? T
    : `Error: ${T} is not less than ${Cap}`;

// region Tests

type True = MaxStrLen<'124', 5>;
//   ^?

type False = MaxStrLen<'124', 2>;
//   ^?
