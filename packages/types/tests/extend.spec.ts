import { describe, expectTypeOf, test } from 'vitest';
import type { Extend } from '../src/extend';
import type { EmptyObject } from './../src/empty-object';

describe('Extend another type', () => {
    test('extend existing fields and ignore non-existing fields', () => {
        type Bob = {
            Bob: string;
            Berta: 4;
        };

        type Bert = {
            Bob: number;
            Bert: string;
        };

        type Expected = {
            Bob: string | number;
            Berta: 4;
        };

        type Actual = Extend<Bob, Bert>;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    test('extend with nothing does nothing', () => {
        type Expected = {
            Bob: string;
            Berta: 4;
        };

        type Actual = Extend<Expected, EmptyObject>;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });
});
