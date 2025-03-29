'use ready';
'use new';

import type { Extends } from './extends';

export type If<Condition extends boolean, Then, Else> = Condition extends true
    ? Then
    : Else;

type Guard2<Guard, OnGuard, ElseCheck, OnCheck, OnNotCheck, T> = If<
    Extends<T, Guard>,
    OnGuard,
    If<Extends<T, ElseCheck>, OnCheck, OnNotCheck>
>;

export type Guard<T, Check, OnCheck, OnNotCheck, OnGuard, TGuard> =
    T extends TGuard ? OnGuard : T extends Check ? OnCheck : OnNotCheck;

// region Tests
type Test = Guard<{ bob: string }, object, '5', number, boolean, string>;
//   ^?

type _Test = Guard2<string, boolean, object, '5', number, { bob: string }>;
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

type _Test2 = Guard2<
    //^?
    string,
    boolean,
    'boolean',
    'string',
    number,
    { bob: string }
>;

type Test3 = Guard<boolean, boolean, 'string', number, boolean, string>;
//   ^?

type _Test3 = Guard2<
    //^?
    string,
    boolean,
    boolean,
    'string',
    number,
    boolean
>;

type _Test4 = Guard2<
    //^?
    Date,
    Date,
    string,
    'bob',
    'bert',
    string
>;

type _Test5 = Guard2<
    //^?
    Date,
    Date,
    string,
    'bob',
    'bert',
    number
>;

type _Test6 = Guard2<
    //^?
    Date,
    'Date',
    string,
    'bob',
    'bert',
    Date
>;
