/**
 * @description Omits keys that extend {@link U}
 *
 * @note Deep
 *
 * @since 0.0.14
 */
export type OmitBy<T, Check> = {
    [K in keyof T as T[K] extends Check ? never : K]: T[K];
};
