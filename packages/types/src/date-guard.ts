import type { Guard } from './guard';

/**
 * @description A guard wrapper for the `Date` type
 *
 * @note Since `Date` matches against `object`, it requires special handling in many types
 *
 * @since 0.0.14
 */
export type DateGuard<T, TCheck, OnCheck, OnNotCheck, OnDate = Date> = Guard<
    Date,
    OnDate,
    TCheck,
    OnCheck,
    OnNotCheck,
    T
>;
