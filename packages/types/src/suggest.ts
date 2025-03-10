/**
 * @description
 * Suggests the provided type {@link T}, but allows for any non-nullable value
 *
 * @since 0.0.9
 * @modified 0.0.14 - Now a generic suggestion
 */
export type Suggest<T> = T | (unknown & {});
