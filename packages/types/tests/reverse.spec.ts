import { describe, expectTypeOf, it } from 'vitest';
import type { Reverse } from '../src/reverse';

describe('Reverses an array', () => {
    it('should reverse a tuple/array', () => {
        type Actual = Reverse<[1, 2, 3]>;

        type Expected = [3, 2, 1];

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    it('should preserve a generic array', () => {
        type Actual = Reverse<unknown[]>;

        type Expected = unknown[];

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });
});
