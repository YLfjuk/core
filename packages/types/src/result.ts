/**
 * @description A Result type that represents a successful operation
 *
 * @since 0.0.17
 */
export type Success<T> = { success: true; data: T };

/**
 * @description A Result type that represents a failed operation
 *
 * @since 0.0.17
 */
export type Failure<Err> = { success: false; reason: Err };

/**
 * @description A safer way to deal with errors without throwing
 *
 * @see {@link Success}
 * @see {@link Failure}
 *
 * @since 0.0.13
 * @modified 0.0.17
 */
export type Result<T, Err = Error> = Success<T> | Failure<Err>;

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
>["reason"];

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
>["data"];
