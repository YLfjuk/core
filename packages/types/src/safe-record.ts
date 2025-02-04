/**
 * @alternative - Set `noUncheckedIndexedAccess: true` in your `tsconfig`
 */
export type SafeRecord<Key extends PropertyKey, T> = Record<
    Key,
    T | undefined
>;
