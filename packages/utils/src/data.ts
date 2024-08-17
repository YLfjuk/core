export const isDefined = (value: unknown): value is NonNullable<unknown> =>
    value != null;
