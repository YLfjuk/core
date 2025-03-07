'use new';

import type { Guard } from './guard';

export type GuardDate<
    T,
    Check,
    OnCheck,
    OnNotCheck,
    OnDate = Date
> = T extends Date ? OnDate : T extends Check ? OnCheck : OnNotCheck;

/**
 * @see {@link Guard}
 */
export type GuardDate2<T, Check, OnCheck, OnNotCheck, OnDate = Date> = Guard<
    T,
    Check,
    OnCheck,
    OnNotCheck,
    OnDate,
    Date
>;

// region Tests
type Test1 = GuardDate<{ bob: Date }, object, string, number>;
//   ^?

type Test2 = GuardDate<{ bob: Date }, boolean, string, number>;
//   ^?

type Test3 = GuardDate<boolean, boolean, string, number>;
//   ^?

type Test2_1 = GuardDate2<{ bob: Date }, object, string, number>;
//   ^?

type Test2_2 = GuardDate2<{ bob: Date }, boolean, string, number>;
//   ^?

type Test2_3 = GuardDate2<boolean, boolean, string, number>;
//   ^?
