import type { Extend } from '../src';
import { describe, test, expectTypeOf  } from 'vitest';

describe('Extend another type', () => {
    test('extend existing fields and ignore non-existing fields', () => {
        type Bob = {
            Bob: string;
        };

        type Bert = {
            Bob: number;
            Bert: string;
        };

        type Expected = {
            Bob: string | number;
        };

        type Actual = Extend<Bob, Bert>;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });
});
