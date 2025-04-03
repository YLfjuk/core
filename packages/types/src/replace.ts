/**
 * @description Recursively replaces occurrences of type `R` in `T` with `N`.
 *
 * @template T - The original type to process.
 * @template R - The type to be replaced.
 * @template N - The type that replaces occurrences of `R`.
 *
 * @example
 * ```ts
 * type Example = Replace<{ a: number; b: string; c: number[] }, number, boolean>;
 * // Result: { a: boolean; b: string; c: boolean[] }
 * ```
 *
 * @since 0.0.14
 */
export type Replace<T, R, N> = T extends R
    ? N
    : T extends Date
    ? Date
    : T extends object
    ? {
          [K in keyof T]: Replace<T[K], R, N>;
      }
    : T;
