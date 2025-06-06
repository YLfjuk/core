/**
 * @description Prettifies the type and expands it
 *
 * @note Deep
 * @note preserves `Date`
 *
 * @since 0.0.1
 * @modified 0.0.14
 */
export type Prettify<T> = T extends Date
    ? T
    : {
          [K in keyof T]: Prettify<T[K]>;
      };
