import type { Box } from '@ylfjuk-core/types';

/**
 * @description A stricter wrapper around the `extends` keyword'
 *
 * @since 0.0.14
 */
export type Extends<A, B> = Box<A> extends Box<B> ? true : false;
