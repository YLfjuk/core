import { describe, expectTypeOf, test } from 'vitest';
import type { IsPositiveOrZero } from '../src/is-positive-or-zero';

describe('returns if a number is an element of the natural numbers group', () => {
    test('positive number', () => {
        type Actual = IsPositiveOrZero<4>;
        type Expected = true;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    test('positive float', () => {
        type Actual = IsPositiveOrZero<4.7>;
        type Expected = true;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    test('0', () => {
        type Actual = IsPositiveOrZero<0>;
        type Expected = true;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    test('number', () => {
        type Actual = IsPositiveOrZero<number>;
        type Expected = true;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    test('negative number', () => {
        type Actual = IsPositiveOrZero<-1>;
        type Expected = false;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    test('negative float', () => {
        type Actual = IsPositiveOrZero<-4.7>;
        type Expected = false;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    test('"negative" zero', () => {
        type Actual = IsPositiveOrZero<-0>;
        type Expected = true;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });
});
