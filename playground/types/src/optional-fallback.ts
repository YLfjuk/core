'use ready';

import type { Maybe } from '@ylfjuk-core/types';
import type { Suggest } from './modified/suggest';
import type { NonOptional } from './non-optional';
import type { PickOptionals } from './pick-optionals';

type Settings = { allowUnknownFallback?: boolean };
type DefaultSettings = { allowUnknownFallback: false };

export type OptionalFallback<
    T,
    Value extends T,
    Fallback extends Options['allowUnknownFallback'] extends true
        ? Maybe<Suggest<Partial<PickOptionals<T>>>>
        : Partial<PickOptionals<T>>, //? remove unknown,
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
    { bob: 4; bert: 'bob'; berta: undefined },
    null,
    { allowUnknownFallback: true }
>;

type Test10 = OptionalFallback<
    //^?
    ExtendedType,
    { bob: 4; bert: undefined; berta: undefined },
    null,
    { allowUnknownFallback: true }
>;

type Test11 = OptionalFallback<
    //^?
    ExtendedType,
    { bob: 4; bert: 'bob' },
    null,
    { allowUnknownFallback: true }
>;

type Test12 = OptionalFallback<
    //^?
    ExtendedType,
    { bob: 4; berta: false },
    null,
    { allowUnknownFallback: true }
>;

type Test13 = OptionalFallback<
    //^?
    ExtendedType,
    { bob: 4 },
    null,
    { allowUnknownFallback: true }
>;

type Test14 = OptionalFallback<
    //^?
    ExtendedType,
    { bob: 4; bert: 'bob'; berta: true },
    { bert: 'bert'; berta: false }
>;

type Test15 = OptionalFallback<
    //^?
    ExtendedType,
    { bob: 4; bert: 'bob' },
    { bert: 'bert'; berta: false }
>;

type Test16 = OptionalFallback<
    //^?
    ExtendedType,
    { bob: 4; berta: true },
    { bert: 'bert'; berta: false }
>;

type Test17 = OptionalFallback<
    //^?
    ExtendedType,
    { bob: 4; bert: undefined },
    { bert: 'bert'; berta: false }
>;

type Test18 = OptionalFallback<
    //^?
    ExtendedType,
    { bob: 4; berta: undefined },
    { bert: 'bert'; berta: false }
>;

type Test19 = OptionalFallback<
    //^?
    ExtendedType,
    { bob: 4; bert: undefined; berta: undefined },
    { bert: 'bert'; berta: false }
>;

type Test20 = OptionalFallback<
    //^?
    ExtendedType,
    { bob: 4 },
    { bert: 'bert'; berta: number },
    { allowUnknownFallback: true }
>;
