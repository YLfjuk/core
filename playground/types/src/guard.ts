'use ready';
'use new';

export type Guard<T, Check, OnCheck, OnNotCheck, OnGuard, TGuard> =
    T extends TGuard ? OnGuard : T extends Check ? OnCheck : OnNotCheck;

// region Tests
type Test = Guard<{ bob: string }, object, '5', number, boolean, string>;
//   ^?

type Test2 = Guard<
    //^?
    { bob: string },
    'boolean',
    'string',
    number,
    boolean,
    string
>;

type Test3 = Guard<boolean, boolean, 'string', number, boolean, string>;
//   ^?
