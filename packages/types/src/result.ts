export type Result<T, Err = Error> =
    | { success: true; data: T }
    | { success: false; reason: Err };

export type ResultError<Res extends Result<unknown, unknown>> = Extract<
    Res,
    { success: false }
>['reason'];

export type ResultData<Res extends Result<unknown, unknown>> = Extract<
    Res,
    { success: true }
>['data'];
