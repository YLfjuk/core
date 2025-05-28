import type { IsTuple } from '@ylfjuk-core/types';

/**
 * Recursively extracts all possible key paths from a given type `T` as string literal types.
 *
 * - For regular object properties, returns their keys as strings.
 * - For nested objects, returns dot-separated key paths (e.g., `"parent.child"`).
 * - For arrays:
 *   - If the array is a tuple, extracts key paths for each tuple element.
 *   - If the array is not a tuple, includes numeric indices and recursively extracts key paths for array elements (e.g., `"items.0"`, `"items.0.subkey"`).
 * - Excludes `Date` types from extraction.
 *
 * @note Auto-completion of array indices is not supported in TypeScript, but the type will still reflect the structure.
 *
 * @template T The type from which to extract key paths.
 */
export type ExtractKeys<T> = T extends Date
    ? never
    : {
          [K in keyof T & string]:
              | `${K}`
              | (T[K] extends Array<infer U>
                    ? IsTuple<T[K]> extends true
                        ? `${K}.${ExtractKeys<Omit<T[K], keyof unknown[]>>}`
                        : `${K}.${number}` | `${K}.${number}.${ExtractKeys<U>}`
                    : T[K] extends object
                    ? `${K}.${ExtractKeys<T[K]>}`
                    : never);
      }[keyof T & string];
