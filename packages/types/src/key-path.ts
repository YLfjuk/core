import type { IsTuple } from '@ylfjuk-core/types';

/**
 * Recursively extracts all possible key paths from a given type `T` as string literal types.
 *
 * - For regular object properties, returns their keys as strings.
 * - For nested objects, returns dot-separated key paths (e.g., `"parent.child"`).
 * - For arrays:
 *   - If the array is a tuple, extracts key paths for each tuple element.
 *   - If the array is not a tuple, includes numeric indices and recursively extracts key paths for array elements (e.g., `"items.0"`, `"items.0.subKey"`).
 * - Excludes `Date` types from extraction.
 *
 * @note Auto-completion of array indices is not supported in TypeScript, but the type will still reflect the structure.
 *
 */
export type KeyPath<T> = T extends Date
    ? never
    : T extends Array<infer U>
    ? IsTuple<T> extends true
        ? KeyPath<Omit<T, keyof unknown[]>>
        : `${number}` | `${number}.${KeyPath<U>}`
    : T extends object
    ? {
          [K in keyof T & string]: `${K}` | `${K}.${KeyPath<T[K]>}`;
      }[keyof T & string]
    : never;
