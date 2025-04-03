import { describe, expectTypeOf, it, test } from 'vitest';
import type { MaskLiterals } from '../src/mask-literals';

describe('Extract the type from a template literal type', () => {
    test('string', () => {
        type Expected = string;
        type Actual = MaskLiterals<string>;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    test('const string', () => {
        type Expected = string;
        type Actual = MaskLiterals<'bob'>;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    test('number', () => {
        type Expected = number;
        type Actual = MaskLiterals<number>;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    test('const number', () => {
        type Expected = number;
        type Actual = MaskLiterals<12345>;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    test('stringified number', () => {
        type Expected = string;
        type Actual = MaskLiterals<`${number}`>;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    test('str number', () => {
        type Expected = string;
        type Actual = MaskLiterals<'number'>;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    test('NaN', () => {
        type Expected = number;
        type Actual = MaskLiterals<typeof NaN>;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    test('stringified NaN', () => {
        type Expected = string;
        type Actual = MaskLiterals<`${typeof NaN}`>;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    test('bigint', () => {
        type Expected = bigint;
        type Actual = MaskLiterals<bigint>;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    test('const bigint', () => {
        type Expected = bigint;
        type Actual = MaskLiterals<12345678910111213n>;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    test('stringified bigint', () => {
        type Expected = string;
        type Actual = MaskLiterals<`${bigint}`>;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    test('boolean', () => {
        type Expected = boolean;
        type Actual = MaskLiterals<boolean>;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    test('const boolean', () => {
        type Expected = boolean;
        type Actual = MaskLiterals<true>;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    test('stringified boolean', () => {
        type Expected = string;
        type Actual = MaskLiterals<`${boolean}`>;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    test('symbol', () => {
        const actual = Symbol(0);

        type Expected = symbol;
        type Actual = MaskLiterals<typeof actual>;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    test('null', () => {
        type Expected = null;
        type Actual = MaskLiterals<null>;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    test('stringified null', () => {
        type Expected = string;
        type Actual = MaskLiterals<`${null}`>;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    test('str null', () => {
        type Expected = string;
        type Actual = MaskLiterals<'null'>;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    test('undefined', () => {
        type Expected = undefined;
        type Actual = MaskLiterals<undefined>;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    test('stringified undefined', () => {
        type Expected = string;
        type Actual = MaskLiterals<`${undefined}`>;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    test('literals union', () => {
        type Expected = boolean | number;
        type Actual = MaskLiterals<boolean | number>;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    test('const literals union', () => {
        type Expected = boolean | number;
        type Actual = MaskLiterals<true | 1234>;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    test('stringified literals union', () => {
        type Expected = string;
        type Actual = MaskLiterals<`${boolean | number}`>;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    // it('should musk an object with literals', () => {
    //     type Actual = MaskLiterals<{
    //         name: 'bob';
    //         age: -1;
    //         likes: ['ts'];
    //         birthday: Date;
    //     }>;

    //     type Expected = {
    //         name: string;
    //         age: number;
    //         likes: [string];
    //         birthday: Date;
    //     };

    //     expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    // });
});
