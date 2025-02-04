/**
 * @returns The values of an object or an array
 *
 * @since 0.0.1
 * @modified 0.0.13
 */
export type ValueOf<T> = T extends readonly unknown[] ? T[number] : T[keyof T];
