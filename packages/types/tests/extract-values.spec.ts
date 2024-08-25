import type { ValueOf, ExtractValues } from '../src';
import { describe, test, expectTypeOf } from 'vitest';

describe('Extract the values from a nested object', () => {
    test('1-layer-deep object', () => {
        const obj = {
            Bob: 'bob',
            Bert: 'bert',
        };

        type Expected = string;
        type Actual = ExtractValues<typeof obj>;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    test('same as ValueOf for 1-layer-deep object', () => {
        const obj = {
            Bob: 'bob',
            Bert: 'bert',
        };

        type Expected = ValueOf<typeof obj>;
        type Actual = ExtractValues<typeof obj>;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    test('1-layer-deep const object', () => {
        const obj = {
            Bob: 'bob',
            Bert: 'bert',
        } as const;

        type Expected = 'bob' | 'bert';
        type Actual = ExtractValues<typeof obj>;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    test('same as ValueOf for 1-layer-deep const object', () => {
        const obj = {
            Bob: 'bob',
            Bert: 'bert',
        } as const;

        type Expected = ValueOf<typeof obj>;
        type Actual = ExtractValues<typeof obj>;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    test('1-layer-deep const object with Date value', () => {
        const obj = {
            Bob: 'bob',
            now: new Date(),
        } as const;

        type Expected = 'bob' | Date;
        type Actual = ExtractValues<typeof obj>;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    test('nested object', () => {
        const obj = {
            Bob: 'bob',
            Bert: {
                name: 'bert',
                age: -0,
            },
        };

        type Expected = string | number;
        type Actual = ExtractValues<typeof obj>;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    test('nested const object', () => {
        const obj = {
            Bob: 'bob',
            Bert: {
                name: 'bert',
                age: 0,
            },
        } as const;

        type Expected = 'bob' | 'bert' | 0;
        type Actual = ExtractValues<typeof obj>;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    test('nested const object with Date', () => {
        const obj = {
            Bob: 'bob',
            Bert: {
                name: 'bert',
                age: 0,
                birthday: new Date(),
            },
        } as const;

        type Expected = 'bob' | 'bert' | 0 | Date;
        type Actual = ExtractValues<typeof obj>;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });
});
