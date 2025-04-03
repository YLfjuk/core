import type { NonOptional } from '@ylfjuk-core/types';
import type { Whatever } from '@ylfjuk-core/types';
import type { PickOptional } from './pick-optional';

type Settings = { allowUnknownFallback?: boolean };
type DefaultSettings = { allowUnknownFallback: false };

export type OptionalFallback<
    T,
    Value extends T,
    Fallback extends Options['allowUnknownFallback'] extends true
        ? Whatever<Partial<PickOptional<T>>>
        : Partial<PickOptional<T>>,
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
