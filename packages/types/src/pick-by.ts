/**
 * @description Picks keys that extend {@link U}
 *
 * @since 0.0.10
 */
export type PickBy<T, U> = {
    [K in keyof T as T[K] extends U ? K : never]: T[K];
};
