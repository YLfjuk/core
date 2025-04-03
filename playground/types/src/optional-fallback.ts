'use ready';

import type { NonOptional, PickOptional } from '@ylfjuk-core/types';
import type { Whatever } from '@ylfjuk-core/types';

type Settings = { allowUnknownFallback?: boolean };
type DefaultSettings = { allowUnknownFallback: false };

export type OptionalFallback2<
    T,
    Value extends T,
    Fallback extends Options['allowUnknownFallback'] extends true
        ? Whatever<Partial<PickOptional<T>>>
        : Partial<PickOptional<T>>, //? remove unknown,
    Options extends Settings = DefaultSettings
> = {
    [K in keyof NonOptional<T>]: Value extends {
        [_K in K]: Required<Value>[_K];
    }
        ? Value[K]
        : K extends keyof Fallback
        ? Fallback[K]
        : Fallback;
};

export type OptionalFallback<
    T,
    Value extends Partial<T>,
    Fallback extends Options['allowUnknownFallback'] extends true
        ? Whatever<Partial<PickOptional<T>>>
        : Partial<PickOptional<T>>,
    Options extends Settings = DefaultSettings
> = {
    [K in keyof NonOptional<T>]: K extends keyof Value
        ? Value[K]
        : K extends keyof Fallback
        ? Fallback[K]
        : Fallback;
};

// region Tests
type Type = { bob: number; bert?: string | undefined };
type ExtendedType = { bob: number; bert?: string | undefined; berta?: boolean };

type Test = OptionalFallback<
    //^?
    Type,
    { bob: 4; bert: 'bob' },
    null,
    { allowUnknownFallback: true }
>;

type Test2 = OptionalFallback<
    //^?
    Type,
    { bob: 4; bert: undefined },
    null,
    { allowUnknownFallback: true }
>;

type Test3 = OptionalFallback<
    //^?
    Type,
    { bob: 4 },
    null,
    { allowUnknownFallback: true }
>;

type Test4 = OptionalFallback<
    //^?
    Type,
    { bob: 4; bert: 'bob' },
    null,
    { allowUnknownFallback: true }
>;

type Test5 = OptionalFallback<
    //^?
    Type,
    { bob: 4; bert: undefined },
    null,
    { allowUnknownFallback: true }
>;

type Test6 = OptionalFallback<
    //^?
    Type,
    { bob: 4 },
    null,
    { allowUnknownFallback: true }
>;

type Test7 = OptionalFallback<
    //^?
    ExtendedType,
    { bob: 4; bert: 'bob'; berta: true },
    null,
    { allowUnknownFallback: true }
>;

type Test8 = OptionalFallback<
    //^?
    ExtendedType,
    { bob: 4; bert: undefined; berta: false },
    null,
    { allowUnknownFallback: true }
>;

type Test9 = OptionalFallback<
    //^?
    ExtendedType,
    { bob: 4; bert: 'bob' },
    null,
    { allowUnknownFallback: true }
>;

type Test10 = OptionalFallback<
    //^?
    ExtendedType,
    { bob: 4; berta: false },
    null,
    { allowUnknownFallback: true }
>;

type Test11 = OptionalFallback<
    //^?
    ExtendedType,
    { bob: 4 },
    null,
    { allowUnknownFallback: true }
>;

type Test12 = OptionalFallback<
    //^?
    ExtendedType,
    { bob: 4; bert: 'bob'; berta: true },
    { bert: 'bert'; berta: false }
>;

type Test13 = OptionalFallback<
    //^?
    ExtendedType,
    { bob: 4; bert: 'bob' },
    { bert: 'bert'; berta: false }
>;

type Test14 = OptionalFallback<
    //^?
    ExtendedType,
    { bob: 4; berta: true },
    { bert: 'bert'; berta: false }
>;

type Test15 = OptionalFallback<
    //^?
    ExtendedType,
    { bob: 4; bert: undefined },
    { bert: 'bert'; berta: false }
>;

type Test16 = OptionalFallback<
    //^?
    ExtendedType,
    { bob: 4 },
    { bert: 'bert'; berta: number },
    { allowUnknownFallback: true }
>;
