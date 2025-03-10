import { describe, expectTypeOf, it } from 'vitest';
import type { Extends } from '../src/extends';

describe('A stricter version of the `extends` keyword', () => {
    it('should return true if they extend', () => {
        type Actual = Extends<6, number>;

        type Expected = true;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    it('should return false if they do not extend', () => {
        type Actual = Extends<'bob' | 5, string>;

        type Expected = false;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });
});
