import type { Box } from '@ylfjuk-core/types';

/**
 * @description A stricter wrapper around the `extends` keyword'
 *
 * @bug Does not work on the `never` type
 * ```ts
 * type MyType = Extends<never, any>; // Result: true
 * ```
 *
 * - This is due to the behavior of typescript
 * ```ts
 * type MyType = never extends any ? true : false; // Result: true
 * ```
 * TODO: fix bug
 *
 * @since 0.0.14
 */
export type Extends<A, B> = Box<A> extends Box<B> ? true : false;
