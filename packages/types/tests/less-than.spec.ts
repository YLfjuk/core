import { describe, expectTypeOf, test } from 'vitest';
import type { LessThan } from '../src/less-than';

describe('returns if a number is less than another number', () => {
    test('+x < +y', () => {
        type Actual = LessThan<1, 2>;
        type Expected = true;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>;
    });

    test('+x = +y', () => {
        type Actual = LessThan<1, 1>;
        type Expected = false;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>;
    });

    test('+x > +y', () => {
        type Actual = LessThan<2, 1>;
        type Expected = false;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>;
    });

    test('+x > 0', () => {
        type Actual = LessThan<1, 0>;
        type Expected = false;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>;
    });

    test('0 < +y', () => {
        type Actual = LessThan<0, 1>;
        type Expected = true;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>;
    });

    test('0 = 0', () => {
        type Actual = LessThan<0, 0>;
        type Expected = false;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>;
    });

    test('-x < +y', () => {
        type Actual = LessThan<-3, 3>;
        type Expected = true;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>;
    });

    test('+x > -y', () => {
        type Actual = LessThan<3, -2>;
        type Expected = false;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>;
    });

    test('-x = -y', () => {
        type Actual = LessThan<-2, -2>;
        type Expected = false;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>;
    });

    test('-x < -y', () => {
        type Actual = LessThan<-3, -2>;
        type Expected = true;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>;
    });

    test('-x > -y', () => {
        type Actual = LessThan<-2, -3>;
        type Expected = false;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>;
    });

    test('-x < 0', () => {
        type Actual = LessThan<-3, 0>;
        type Expected = true;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>;
    });

    test('0 > -y', () => {
        type Actual = LessThan<0, -3>;
        type Expected = false;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>;
    });

    test.todo('add float support');
});
