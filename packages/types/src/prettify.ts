/**
 * @description Prettifies the type and expands it
 *
 * @note Deep
 * @note preserves `Date`
 *
 * @since 0.0.1
 * @modified 0.0.14 {@breaking 💥} | Prettifies the entire `object`, and avoids expanding the `Date` type
 */
export type Prettify<T> = T extends Date
    ? T
    : T extends object
    ? {
          [K in keyof T]: Prettify<T[K]>;
      }
    : T;
