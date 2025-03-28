/**
 * @description A safer way to deal with errors without throwing
 *
 * @since 0.0.13
 */
export type Result<T, Err = Error> =
    | { success: true; data: T }
    | { success: false; reason: Err };

/**
 * @description Extract the reason type from a Result type
 *
 * @see {@link Result}
 *
 * @since 0.0.13
 */
export type ResultError<Res extends Result<unknown, unknown>> = Extract<
    Res,
    { success: false }
>['reason'];

/**
 * @description Extract the data type from a Result type
 *
 * @see {@link Result}
 *
 * @since 0.0.13
 */
export type ResultData<Res extends Result<unknown, unknown>> = Extract<
    Res,
    { success: true }
>['data'];
