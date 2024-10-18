import { describe, expectTypeOf, test } from 'vitest';
import type { ExtractLiteral } from '../src';

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
        type Expected = number;
        type Actual = ExtractLiteral<'12345'>;

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
        type Expected = number;
        type Actual = ExtractLiteral<`${12345n}`>;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    test('boolean', () => {
        type Expected = boolean;
        type Actual = ExtractLiteral<`${boolean}`>;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    test('const boolean', () => {
        type Expected = boolean;
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
});
