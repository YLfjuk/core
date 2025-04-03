/**
 * @description Masks the `Date` type as a `string`
 *
 * @note Useful for wrapping the return type of an api call, or `JSON` data
 *
 * @since 0.0.14
 */
export type MaskDates<T> = T extends Date
    ? string
    : T extends object
    ? {
          [K in keyof T]: MaskDates<T[K]>;
      }
    : T;
