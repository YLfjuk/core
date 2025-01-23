import { describe, expectTypeOf, test } from 'vitest';
import type { Equal } from './../src/equal';

describe('A type that checks if two other types are strictly equal', () => {
    test('diff types', () => {
        type Actual = Equal<string, number>;
        type Expected = false;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    test('same types', () => {
        type Actual = Equal<number, number>;
        type Expected = true;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    test('same literals', () => {
        type Actual = Equal<2, 2>;
        type Expected = true;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    test('literals and mask', () => {
        type Actual = Equal<2, number>;
        type Expected = false;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    test('type and union with it', () => {
        type Actual = Equal<string | number, number>;
        type Expected = false;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });
});
