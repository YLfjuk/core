import type { FN } from '../src';
import { describe, test, expectTypeOf } from 'vitest';

describe('FN', () => {
    test('any function type', () => {
        // biome-ignore lint/suspicious/noExplicitAny: testing
        const fn = (...args: any[]) => {
            return args?.[0];
        };

        type Expected = FN;

        type Actual = typeof fn;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    test('any any[] function type', () => {
        // biome-ignore lint/suspicious/noExplicitAny: testing
        const fn = (...args: any[]) => {
            return args;
        };

        // biome-ignore lint/suspicious/noExplicitAny: testing
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
