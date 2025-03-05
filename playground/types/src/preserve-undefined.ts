//? Lean Required
export type PreserveUndefined<T> = {
    [K in keyof (T & Required<T>)]: T[K];
};

// region Tests
type Test = PreserveUndefined<{
    //^?
    bob: string;
    bert?: number | undefined;
    berta?: boolean;
}>;
