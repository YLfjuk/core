export type DeepDict<T = unknown> = {
    [key: string]: T | DeepDict<T>;
};
