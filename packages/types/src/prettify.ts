import type { GuardDate } from './guard-date';

/**
 * @description Prettifies the type and expands it
 *
 * @variant deep
 *
 * @since 0.0.1
 * @modified 0.0.14 {@breaking 💥} | Prettifies the entire `object`, and avoids expanding the `Date` type
 */
export type Prettify<T> = GuardDate<
    T,
    object,
    {
        [K in keyof T]: Prettify<T[K]>;
    } & {},
    T
>;
