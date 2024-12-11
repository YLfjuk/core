import { describe, expectTypeOf, test } from 'vitest';
import type { FN } from '../src/fn';

describe('FN', () => {
    test('any function type', () => {
        const fn = (...args: any[]) => {
            return args?.[0];
        };

        type Expected = FN;

        type Actual = typeof fn;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    test('any any[] function type', () => {
        const fn = (...args: any[]) => {
            return args;
        };

        type Expected = FN<any[]>;

        type Actual = typeof fn;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    test('string void function type', () => {
        const fn = (...args: string[]) => console.log(args);

        type Expected = FN<void, string>;

        type Actual = typeof fn;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });
});
