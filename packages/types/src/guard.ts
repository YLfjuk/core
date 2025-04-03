import type { Extends } from './extends';
import type { If } from './if';

/**
 * @description A guard wrapper for a conditional check
 *
 * @param TGuard The guard type to check against
 * @param OnGuard The result if {@link T} extends {@link TGuard}
 * @param TCheck The type to check if {@link T} does not extend {@link TGuard}
 * @param OnCheck The result if {@link T} extends {@link TCheck}
 * @param OnNotCheck The result if {@link T} does not extend {@link TCheck}
 * @param T The type to check against
 *
 * @since 0.0.14
 */
export type Guard<TGuard, OnGuard, TCheck, OnCheck, OnNotCheck, T> = If<
    Extends<T, TGuard>,
    OnGuard,
    If<Extends<T, TCheck>, OnCheck, OnNotCheck>
>;
