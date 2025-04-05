import { describe, expectTypeOf, test } from 'vitest';
import type { Abs } from '../src/abs';

describe('returns the absolute value of a number', () => {
    test('positive number', () => {
        type Actual = Abs<1>;
        type Expected = 1;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    test('negative number', () => {
        type Actual = Abs<-1>;
        type Expected = 1;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    test('zero', () => {
        type Actual = Abs<0>;
        type Expected = 0;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    test('"negative" zero', () => {
        type Actual = Abs<-0>;
        type Expected = 0;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });
});
