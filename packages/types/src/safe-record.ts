/**
 * @alternative - Set `noUncheckedIndexedAccess: true` in your `tsconfig`
 *
 * @since 0.0.13
 */
export type SafeRecord<Key extends PropertyKey, T> = Record<
    Key,
    T | undefined
>;
