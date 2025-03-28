/**
 * @note {@link Record} can be used directly with the `tsconfig` flag `noUncheckedIndexedAccess` set to `true`
 *
 * @since 0.0.13
 */
export type SafeRecord<Key extends PropertyKey, T> = Record<Key, T | undefined>;
