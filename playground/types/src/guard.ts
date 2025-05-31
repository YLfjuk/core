import type { If, Extends } from '@ylfjuk-core/types';

/**
 * @description A guard wrapper for a conditional check
 *
 * @template TGuard The guard type to check against
 * @template OnGuard The result if {@link T} extends {@link TGuard}
 * @template TCheck The type to check if {@link T} does not extend {@link TGuard}
 * @template OnCheck The result if {@link T} extends {@link TCheck}
 * @template OnNotCheck The result if {@link T} does not extend {@link TCheck}
 * @template T The type to check against
 *
 * @bug Does not work on the `never` type
 * @deprecated Fixing the bug may include changing the api
 * TODO: fix @bug
 *
 * @since 0.0.14
 */
export type Guard<TGuard, OnGuard, TCheck, OnCheck, OnNotCheck, T> = If<
    Extends<T, TGuard>,
    OnGuard,
    If<Extends<T, TCheck>, OnCheck, OnNotCheck>
>;
