import { describe, expectTypeOf, test } from 'vitest';
import type { Extends } from '../src/extends';

describe('A stricter wrapper around the `extends` keyword', () => {
    test('extends', () => {
        type Actual = Extends<'bob', string>;
        type Expected = true;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    test('not extends', () => {
        type Actual = Extends<number, string>;
        type Expected = false;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    test('not strict extends', () => {
        type Actual = Extends<'bob' | 3, string>;
        type Expected = false;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });
});
