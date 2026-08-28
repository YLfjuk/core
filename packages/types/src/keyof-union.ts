/**
 * Extracts every key from every member of a union.
 *
 * @example
 * type Union = { bob: string } | { bert: number };
 * type Keys = KeyofUnion<Union>; //? "bob" | "bert"
 *
 * @since 0.0.17
 */
export type KeyofUnion<T> = T extends infer U ? keyof U : never;
