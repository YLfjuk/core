export type GuardDate<
    T,
    Check,
    OnCheck,
    OnNotCheck,
    OnDate = Date
> = T extends Date ? OnDate : T extends Check ? OnCheck : OnNotCheck;

// region Tests
type Test6_1 = GuardDate<{ bob: Date }, object, string, number>;
//   ^?

type Test6_2 = GuardDate<{ bob: Date }, boolean, string, number>;
//   ^?

type Test6_3 = GuardDate<boolean, boolean, string, number>;
//   ^?
