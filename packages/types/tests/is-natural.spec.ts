import { describe, expectTypeOf, test } from 'vitest';
import type { IsNatural } from '../src/is-natural';

describe('returns if a number is an element of the natural numbers group', () => {
    test('positive number', () => {
        type Actual = IsNatural<4>;
        type Expected = true;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    test('positive float', () => {
        type Actual = IsNatural<4.7>;
        type Expected = true;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    test('0', () => {
        type Actual = IsNatural<0>;
        type Expected = true;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    test('number', () => {
        type Actual = IsNatural<number>;
        type Expected = true;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    test('negative number', () => {
        type Actual = IsNatural<-1>;
        type Expected = false;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    test('negative float', () => {
        type Actual = IsNatural<-4.7>;
        type Expected = false;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    test('"negative" zero', () => {
        type Actual = IsNatural<-0>;
        type Expected = true;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });
});
