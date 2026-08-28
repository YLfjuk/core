/**
 * Represents a successful operation.
 *
 * @since 0.0.17
 */
export type Success<T> = { success: true; data: T };

/**
 * Represents a failed operation.
 *
 * @since 0.0.17
 */
export type Failure<Err> = { success: false; reason: Err };

/**
 * Represents success or failure without throwing.
 *
 * @see {@link Success}
 * @see {@link Failure}
 *
 * @since 0.0.13
 */
export type Result<T, Err = Error> = Success<T> | Failure<Err>;

/**
 * Extracts the reason type from a `Result`.
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
 * Extracts the data type from a `Result`.
 *
 * @see {@link Result}
 *
 * @since 0.0.13
 */
export type ResultData<Res extends Result<unknown, unknown>> = Extract<
	Res,
	{ success: true }
>["data"];
