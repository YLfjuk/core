import { describe, expectTypeOf, test } from 'vitest';
import type { ValueOf } from '../src/value-of';

describe('Value Of', () => {
    test('type contains values of object', () => {
        const obj = {
            Bob: 'bob',
            Bert: 'bert',
        };

        type Expected = string;
        type Actual = ValueOf<typeof obj>;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    test('type contains values of const object', () => {
        const obj = {
            Bob: 'bob',
            Bert: 'bert',
        } as const;

        type Expected = 'bob' | 'bert';
        type Actual = ValueOf<typeof obj>;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });
});
