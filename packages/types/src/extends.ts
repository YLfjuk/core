import type { Box } from "@ylfjuk-core/types";

/**
 * A stricter wrapper around the `extends` keyword.
 *
 * @remarks Does not support `never` because TypeScript evaluates the underlying conditional as `true`:
 * ```ts
 * type MyType = Extends<never, any>; // Result: true
 * ```
 *
 * @since 0.0.14
 */
export type Extends<A, B> = Box<A> extends Box<B> ? true : false;
