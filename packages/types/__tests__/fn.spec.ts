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

        type Expected = FN<void, string[]>;

        type Actual = typeof fn;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    test('function with named arguments', () => {
        const fn = (arg1: string, arg2: number, ...rest: boolean[]) =>
            console.log(arg1, arg2, ...rest);

        type Expected = FN<
            void,
            [arg1: string, arg2: number, ...rest: boolean[]]
        >;

        type Actual = typeof fn;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    test('function with `this`', () => {
        function fn(
            this: { name: string },
            arg1: string,
            arg2: number,
            ...rest: boolean[]
        ) {
            console.log(this.name, arg1, arg2, ...rest);
        }

        type Expected = FN<
            void,
            [arg1: string, arg2: number, ...rest: boolean[]],
            { name: string }
        >;

        type Actual = typeof fn;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });
});
