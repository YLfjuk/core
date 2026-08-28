/**
 * Suggests `T` while allowing any non-nullable value.
 *
 * @since 0.0.9
 */
export type Suggest<T> = T | (unknown & {});
