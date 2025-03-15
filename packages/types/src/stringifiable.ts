import type { Primitive } from './primitive';

/**
 * @description Primitives that can be stringified, or an object with the `toString` method
 *
 * @see {@link Primitives}
 *
 * @since 0.0.14
 */
export type Stringifiable =
    | Exclude<Primitive, symbol>
    | {
          toString(): string;
      };
