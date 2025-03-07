'use ready';
'use new';

/**
 * @note {@link Required} can be used directly with the `tsconfig` flag `exactOptionalPropertyTypes` set to `true`
 *
 * @remarks
 * The type can also be described as `PreserveUndefined`, `LeanRequired`, `LaxRequired` or `SofRequired`
 */
export type NonOptional<T> = {
    [K in keyof (T & Required<T>)]: T[K];
};

// region Tests
type Test = NonOptional<{
    //^?
    bob: string;
    bert?: number | undefined;
    berta?: boolean;
}>;
