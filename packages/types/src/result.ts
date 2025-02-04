/**
 * @since 0.0.13
 */
export type Result<T, Err = Error> =
    | { success: true; data: T }
    | { success: false; reason: Err };

/**
 * @see {@link Result}
 *
 * @since 0.0.13
 */
export type ResultError<Res extends Result<unknown, unknown>> = Extract<
    Res,
    { success: false }
>['reason'];

/**
 * @see {@link Result}
 *
 * @since 0.0.13
 */
export type ResultData<Res extends Result<unknown, unknown>> = Extract<
    Res,
    { success: true }
>['data'];
