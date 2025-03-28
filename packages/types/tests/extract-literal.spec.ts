import { describe, expectTypeOf, test } from 'vitest';
import type { ExtractLiteral } from '../src/extract-literal';

describe('Extract the type from a template literal type', () => {
    test('string', () => {
        type Expected = string;
        type Actual = ExtractLiteral<string>;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    test('const string', () => {
        type Expected = 'bob';
        type Actual = ExtractLiteral<'bob'>;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    test('number', () => {
        type Expected = number;
        type Actual = ExtractLiteral<`${number}`>;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    test('const number', () => {
        type Expected = 12345;
        type Actual = ExtractLiteral<'12345'>;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    test('negative const number', () => {
        type Expected = -12345;
        type Actual = ExtractLiteral<'-12345'>;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    test('float const number', () => {
        type Expected = 1.06;
        type Actual = ExtractLiteral<'1.06'>;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    test('negative float const number', () => {
        type Expected = -1.6;
        type Actual = ExtractLiteral<'-1.6'>;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    test.fails.todo('"negative" zero', () => {
        type Expected = 0;
        type Actual = ExtractLiteral<'-0'>;

        // @ts-expect-error: this test fails
        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    test('str number', () => {
        type Expected = 'number';
        type Actual = ExtractLiteral<'number'>;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    test('NaN', () => {
        type Expected = number;
        type Actual = ExtractLiteral<`${typeof NaN}`>;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    test('bigint', () => {
        type Expected = bigint;
        type Actual = ExtractLiteral<`${bigint}`>;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    test('const bigint', () => {
        type Expected = 12345678910111213n;
        type Actual = ExtractLiteral<`${12345678910111213n}`>;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    test('const "bigint"', () => {
        type Expected = 12345;
        type Actual = ExtractLiteral<`${12345n}`>;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    test('boolean', () => {
        type Expected = boolean;
        type Actual = ExtractLiteral<`${boolean}`>;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    test('const boolean', () => {
        type Expected = true;
        type Actual = ExtractLiteral<`${true}`>;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    test('null', () => {
        type Expected = null;
        type Actual = ExtractLiteral<`${null}`>;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    test('str null', () => {
        type Expected = null;
        type Actual = ExtractLiteral<'null'>;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    test('undefined', () => {
        type Expected = undefined;
        type Actual = ExtractLiteral<`${undefined}`>;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    test('literals union', () => {
        type Expected = boolean | number;
        type Actual = ExtractLiteral<`${boolean | number}`>;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    test('const literals union', () => {
        type Expected = true | 1234;
        type Actual = ExtractLiteral<`${true | 1234}`>;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });
});
