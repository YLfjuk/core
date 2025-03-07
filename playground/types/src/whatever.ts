'use ready';
'use new';

import type { Maybe } from '@ylfjuk-core/types';
import type { Suggest } from './modified/suggest';

/**
 * @see {@link Suggest}
 * @see {@link https://x.com/colinhacks/status/1891069007299522877?s=19}
 *
 * @alternative
 * type Whatever<T> = T | {} | null | undefined;
 */
export type Whatever<T> = Maybe<Suggest<T>>;

// region Tests
const test: Whatever<{ bob: 'bob' | 'bert' }> = { bob: '23' };
const test2: Whatever<{ bob: 'bob' | 'bert' }> = null;
