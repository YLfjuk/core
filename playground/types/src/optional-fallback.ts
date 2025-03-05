import type { PreserveUndefined } from './preserve-undefined';

// TODO: omit fields that aren't optional since they'll always have a value
export type OptionalFallback<
    T,
    Keys extends keyof T,
    Fallback extends unknown | T,
    Value extends T
> = {
    [K in Keys & keyof PreserveUndefined<T>]: Value extends {
        [_K in K]: Required<Value>[_K];
    }
        ? Value[K]
        : Fallback extends T
        ? Fallback[K]
        : Fallback;
}[Keys];

// region Tests
type Type = { bob: number; bert?: string | undefined };
type ExtendedType = { bob: number; bert?: string | undefined; berta?: boolean };

type Test = OptionalFallback<Type, 'bob', null, { bob: 4; bert: 'bob' }>;
//   ^?

type Test2 = OptionalFallback<Type, 'bob', null, { bob: 4; bert: undefined }>;
//   ^?

type Test3 = OptionalFallback<Type, 'bob', null, { bob: 4 }>;
//   ^?

type Test4 = OptionalFallback<Type, 'bert', null, { bob: 4; bert: 'bob' }>;
//   ^?

type Test5 = OptionalFallback<Type, 'bert', null, { bob: 4; bert: undefined }>;
//   ^?

type Test6 = OptionalFallback<Type, 'bert', null, { bob: 4 }>;
//   ^?

type Test7 = OptionalFallback<
    //^?
    ExtendedType,
    'bert' | 'berta',
    null,
    { bob: 4; bert: 'bob'; berta: true }
>;

type Test8 = OptionalFallback<
    //^?
    ExtendedType,
    'bert' | 'berta',
    null,
    { bob: 4; bert: undefined; berta: false }
>;

type Test9 = OptionalFallback<
    //^?
    ExtendedType,
    'bert' | 'berta',
    null,
    { bob: 4; bert: 'bob'; berta: undefined }
>;

type Test10 = OptionalFallback<
    //^?
    ExtendedType,
    'bert' | 'berta',
    null,
    { bob: 4; bert: undefined; berta: undefined }
>;

type Test11 = OptionalFallback<
    //^?
    ExtendedType,
    'bert' | 'berta',
    null,
    { bob: 4; bert: 'bob' }
>;

type Test12 = OptionalFallback<
    //^?
    ExtendedType,
    'bert' | 'berta',
    null,
    { bob: 4; berta: false }
>;

type Test13 = OptionalFallback<
    //^?
    ExtendedType,
    'bert' | 'berta',
    null,
    { bob: 4 }
>;

type Test14 = OptionalFallback<
    //^?
    ExtendedType,
    'bert' | 'berta',
    { bob: 3; bert: 'bert'; berta: false },
    { bob: 4; bert: 'bob'; berta: true }
>;

type Test15 = OptionalFallback<
    //^?
    ExtendedType,
    'bert' | 'berta',
    { bob: 3; bert: 'bert'; berta: false },
    { bob: 4; bert: 'bob' }
>;

type Test16 = OptionalFallback<
    //^?
    ExtendedType,
    'bert' | 'berta',
    { bob: 3; bert: 'bert'; berta: false },
    { bob: 4; berta: true }
>;

type Test17 = OptionalFallback<
    //^?
    ExtendedType,
    'bert' | 'berta',
    { bob: 3; bert: 'bert'; berta: false },
    { bob: 4; bert: undefined }
>;

type Test18 = OptionalFallback<
    //^?
    ExtendedType,
    'bert' | 'berta',
    { bob: 3; bert: 'bert'; berta: false },
    { bob: 4; berta: undefined }
>;

type Test19 = OptionalFallback<
    //^?
    ExtendedType,
    'bert' | 'berta',
    { bob: 3; bert: 'bert'; berta: false },
    { bob: 4; bert: undefined; berta: undefined }
>;
