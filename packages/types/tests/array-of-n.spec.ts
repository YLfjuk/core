import { describe, expectTypeOf, test } from 'vitest';
import type { ArrayOfN } from '../src/array-of-n';

describe('Array of n', () => {
    test('array of positive length', () => {
        type Actual = ArrayOfN<1>;
        type Expected = [0];

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    test('array of 0 length', () => {
        type Actual = ArrayOfN<0>;
        type Expected = [];

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    test('array of "negative" length', () => {
        type Actual = ArrayOfN<-1>;
        type Expected = never;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    test('Amount < Limit', () => {
        type Actual = ArrayOfN<2, 3>;
        type Expected = [0, 0];

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    test('Amount = Limit', () => {
        type Actual = ArrayOfN<3, 3>;
        type Expected = never;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    test('Amount > Limit', () => {
        type Actual = ArrayOfN<4, 3>;
        type Expected = never;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    test('Limit = -1 is the same as no Limit', () => {
        type Actual = ArrayOfN<2, -1>;
        type Same = ArrayOfN<2>;
        type Expected = [0, 0];

        expectTypeOf<Actual>().toEqualTypeOf<Same>();
        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    test('Acc has initial value is the same as without', () => {
        type Actual = ArrayOfN<4, -1, [0, 0]>;
        type Same = ArrayOfN<4>;

        type Expected = [0, 0, 0, 0];

        expectTypeOf<Actual>().toEqualTypeOf<Same>();
        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    test('Fill != 0', () => {
        type Actual = ArrayOfN<4, -1, [], 2>;
        type Expected = [2, 2, 2, 2];

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    test('Acc can not contain numbers other than Fill value', () => {
        // @ts-expect-error: testing
        type Actual = ArrayOfN<4, -1, [1], 2>;
        type Expected = [2, 2, 2, 2];

        expectTypeOf<Actual>().not.toEqualTypeOf<Expected>();
    });
});
