import type { Guard } from './guard';

/**
 * @description A guard wrapper for the `Date` type
 *
 * @note Since `Date` matches against `object`, it requires special handling in many types
 *
 * @since 0.0.14
 *
 * @bug Does not work on the `never` type
 * @deprecated Fixing the bug may include changing the api
 * TODO: fix @bug
 */
export type GuardDate<T, TCheck, OnCheck, OnNotCheck, OnDate = Date> = Guard<
    Date,
    OnDate,
    TCheck,
    OnCheck,
    OnNotCheck,
    T
>;
