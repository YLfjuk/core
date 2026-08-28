/**
 * @remarks Use `Record` directly when `noUncheckedIndexedAccess` is enabled.
 *
 * @since 0.0.13
 */
export type SafeRecord<Key extends PropertyKey, T> = Record<Key, T | undefined>;
