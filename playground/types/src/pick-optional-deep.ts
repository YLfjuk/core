'use ready';

import type {
    Prettify,
    OmitBy,
    PickBy,
    PickOptional,
} from '@ylfjuk-core/types';

/**
 * @description Recursively extracts optional properties from a given type `T`
 *
 * @note Does not preserve `exactOptionalPropertyTypes` unless `exactOptionalPropertyTypes` flag is set to true in the `tsconfig`
 * @note Deep
 *
 * @see {@link PickOptional}
 *
 * @example
 * ```ts
 * type Example = { a: number; b?: string; c?: boolean; d: string };
 * type Result = PickOptional<Example>;
 * // Result: { b?: string; c?: boolean }
 * ```
 *
 * @since
 */
export type PickOptionalDeep<T> = Prettify<
    T extends Date
        ? T
        : T extends object
        ? OmitBy<
              {
                  [K in keyof T]: K extends keyof PickBy<T, object>
                      ? PickOptionalDeep<T[K]>
                      : K extends keyof PickOptional<T>
                      ? PickOptionalDeep<T[K]>
                      : never;
              },
              never
          >
        : T
>;

type Test = PickOptionalDeep<{
    bob: 'bob';
    berta: {
        bob: true;
        next?: number;
    };
    bert?:
        | {
              name: 'bob';
              berta?: 'berta';
          }
        | Date;
}>;
