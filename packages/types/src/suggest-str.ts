/**
 * Suggests `T` while allowing any string.
 *
 * @since 0.0.1
 */
export type SuggestStr<T extends string> = T | (string & {});
