import type { GuardDate } from './guard-date';

export type Replace<T, R, N> = T extends R
    ? N
    : T extends object
    ? {
          [K in keyof T]: Replace<T[K], R, N>;
      }
    : T;

type Replace2<T, R, N> = T extends R
    ? N
    : GuardDate<
          T,
          R,
          N,
          T extends object
              ? {
                    [K in keyof T]: Replace<T[K], R, N>;
                }
              : T
      >;

// region Tests
/**
 * weird use case, but ok
 */
type Test1_1 = Replace<string, string, number>;
//   ^?

type Test1_2 = Replace<{ bob: string }, string, number>;
//   ^?

type Test1_3 = Replace<{ bob: string }, string, { bert: boolean }>;
//   ^?

type Test1_4 = Replace<{ bob: Date; bert: { berta: Date } }, Date, string>;
//   ^?

type Test1_5 = Replace<Date, Date, string>;
//   ^?

type Test1_6 = Replace<Date, string, number>;
//   ^?

// region Tests 2

type Test2_1 = Replace2<string, string, number>;
//   ^?

type Test2_2 = Replace2<{ bob: string }, string, number>;
//   ^?

type Test2_3 = Replace2<{ bob: string }, string, { bert: boolean }>;
//   ^?

type Test2_4 = Replace2<{ bob: Date; bert: { berta: Date } }, Date, string>;
//   ^?

type Test2_5 = Replace2<Date, Date, string>;
//   ^?

type Test2_6 = Replace2<Date, string, number>;
//   ^?
