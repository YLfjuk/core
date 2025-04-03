import type { DateGuard } from './date-guard';

/**
 * @since 0.0.1
 * @modified 0.0.14 {@breaking 💥} | Prettifies the entire `object`, and avoids expanding the `Date` type
 */
export type Prettify<T> = DateGuard<
    T,
    object,
    {
        [K in keyof T]: Prettify<T[K]>;
    } & {},
    T
>;
