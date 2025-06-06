import type { UnknownArray } from './unknown-array';

/**
 * @description A type that checks if an array has duplicate elements.
 *
 * @since 0.0.14
 */
export type HasDuplicates<T extends UnknownArray> = T extends readonly [
    infer First,
    ...infer Rest
]
    ? First extends Rest[number]
        ? true
        : HasDuplicates<Rest>
    : false;
