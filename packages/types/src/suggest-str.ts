import type { Suggest } from './suggest';

/**
 * @description
 * Suggests the provided string {@link T}, but allows any string
 *
 * @see {@link Suggest}
 *
 * @previous AutoCompleteStr {@v 0.0.1}
 *
 * @since 0.0.1
 * @modified 0.0.14 {@breaking 💥}
 */
export type SuggestStr<T extends string> = T | (string & {});
