import type { GuardDate } from './guard-date';
/**
 * @description Recursively makes all properties in `T` optional.
 *
 * @note Deep
 * @note preserves `Date`
 *
 * @example
 * ```ts
 * type Example = { a: number; nested: { b: string } };
 * type Result = PartialDeep<Example>;
 * // Result: { a?: number; nested?: { b?: string } }
 * ```
 *
 * @since 0.0.14
 */
export type PartialDeep<T> = GuardDate<
    T,
    object,
    {
        [K in keyof T]?: PartialDeep<T[K]>;
    },
    T
>;
