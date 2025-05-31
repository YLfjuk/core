/**
 * @description A type representing with a function
 *
 * @since 0.0.5
 * @modified 0.0.14 {@breaking 💥}
 *
 * @todo Add support for `this` context in function types
 */
export type FN<Return = any, Args extends any[] = any[]> = (
    ...args: Args
) => Return;
