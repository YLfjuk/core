import { describe, expectTypeOf, it, test } from 'vitest';
import type { InverseExtract } from '../src/inverse-extract';

describe('Performs the inverse operation of the built-in `Extract` type', () => {
    it('should perform the inverse of the `Extract` built-in type', () => {
        type T = 1234;
        type U = number;

        type Extracted = Extract<T, U>;
        type Inverse = InverseExtract<T, U>;

        type ExpectedExtract = 1234;
        type ExpectedInverse = number;

        expectTypeOf<Extracted>().toEqualTypeOf<ExpectedExtract>();
        expectTypeOf<Inverse>().toEqualTypeOf<ExpectedInverse>();
    });

    test('literals', () => {
        type Actual = InverseExtract<1234, number>;
        type Expected = number;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    test('unions', () => {
        type Actual = InverseExtract<1234 | string, number>;
        type Expected = number;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    test('unions to unions', () => {
        type Actual = InverseExtract<1234 | 'non', number | string>;
        type Expected = number | string;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    it('should result in never if U does not extend T', () => {
        type Actual = InverseExtract<1234, string>;
        type Expected = never;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });
});
