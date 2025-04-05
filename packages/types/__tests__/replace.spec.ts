import { describe, expectTypeOf, test } from 'vitest';
import type { Replace } from '../src/replace';

describe('Recursively replaces occurrences of type `R` in `T` with `N`.', () => {
    test('Basic type replacement', () => {
        type Result = Replace<number, number, boolean>;
        expectTypeOf<Result>().toEqualTypeOf<boolean>();
    });

    test('Nested object replacement', () => {
        type Input = { a: number; b: string; c: { d: number; e: boolean } };
        type Expected = {
            a: boolean;
            b: string;
            c: { d: boolean; e: boolean };
        };
        type Result = Replace<Input, number, boolean>;
        expectTypeOf<Result>().toEqualTypeOf<Expected>();
    });

    test('Array replacement', () => {
        type Result = Replace<number[], number, boolean>;
        expectTypeOf<Result>().toEqualTypeOf<boolean[]>();
    });

    test('No replacement needed', () => {
        type Result = Replace<string, number, boolean>;
        expectTypeOf<Result>().toEqualTypeOf<string>();
    });
});
