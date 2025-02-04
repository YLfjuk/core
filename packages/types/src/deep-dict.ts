/**
 * @since 0.0.9
 */
export type DeepDict<T = unknown> = {
    [key: string]: T | DeepDict<T>;
};
