/**
 * @since 0.0.9
 */
export type InverseExtract<T, U> = T extends U ? U : never;
