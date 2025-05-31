/**
 * @describe A type representing a function with a specific return type, argument types, and an optional `this` context.
 *
 * @since 0.0.5
 * @modified 0.0.x {@breaking 💥} | Accepts an array of args and a `this` argument type for better function type representation (and adds support for named arguments - e.g `[arg1: unknown]`)
 */

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export type FN<Return = any, Args extends any[] = any[], This = any> = (
    ...args: [this: This, ...Args]
) => Return;
