'use ready';
'use modified'; // split from {@slink Suggest}

import type { Suggest } from './modified/suggest';

/**
 * @see {@link Suggest}
 *
 * @previous AutoCompleteStr {@v 0.0.1}
 *
 * @since 0.0.1
 */
export type SuggestStr<T extends string> = Suggest<T, string>;
