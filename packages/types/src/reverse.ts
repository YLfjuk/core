import type { UnknownArray } from './unknown-array';

/**
 * @description Reverses an array
 *
 * @since 0.0.14
 */
export type Reverse<T extends UnknownArray> = [] extends T
    ? T
    : T extends [...infer Rest, infer Last]
    ? [Last, ...Reverse<Rest>]
    : [];
