import type { Split } from './split';

export type Length<T extends string | unknown[]> = T extends string
    ? Length<Split<T>>
    : T['length'];

type Len = Length<'124'>;
//   ^?

type Len2 = Length<['124']>;
//   ^?

type Len3 = Length<[]>;
//   ^?

type Len4 = Length<number[]>;
//   ^?
