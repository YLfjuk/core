import { describe, expectTypeOf, test } from 'vitest';
import type { Equals } from '../src/equals';

describe('A type that checks if two other types are strictly equal', () => {
    test('diff types', () => {
        type Actual = Equals<string, number>;
        type InvertedActual = Equals<number, string>;

        type Expected = false;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
        expectTypeOf<InvertedActual>().toEqualTypeOf<Expected>();
    });

    test('same types', () => {
        type Actual = Equals<number, number>;

        type Expected = true;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    test('same literals', () => {
        type Actual = Equals<2, 2>;

        type Expected = true;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    test('literals and mask', () => {
        type Actual = Equals<2, number>;
        type InvertedActual = Equals<number, 2>;

        type Expected = false;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
        expectTypeOf<InvertedActual>().toEqualTypeOf<Expected>();
    });

    test('type and union with it', () => {
        type Actual = Equals<string | number, number>;
        type InvertedActual = Equals<number, string | number>;

        type Expected = false;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
        expectTypeOf<InvertedActual>().toEqualTypeOf<Expected>();
    });
});
