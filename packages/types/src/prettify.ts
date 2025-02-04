/**
 * @since 0.0.1
 */
export type Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
