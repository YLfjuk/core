'use ready';
'use new';

import type { Box } from '@ylfjuk-core/types';

/**
 * @description A stricter version of `extends`
 *
 * @see {@link Box}
 *
 */
export type Extends<A, B> = Box<A> extends Box<B> ? true : false;
