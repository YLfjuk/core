'use ready';

import type { Box } from '@ylfjuk-core/types';

/**
 * @see {@link Box}
 *
 * @description A stricter version of `extends`
 *
 * @since 0.0.x
 */
export type Extends<A, B> = Box<A> extends Box<B> ? true : false;
