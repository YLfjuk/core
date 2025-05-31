import { describe, expectTypeOf, it } from 'vitest';
import { KeyPath } from '../src/key-path';
import type { Primitive } from '../src';

describe('KeyPath', () => {
    it('should extract key paths from an object', () => {
        type Obj = {
            a: string;
            b: number;
            c: {
                d: boolean;
                e: string[];
            };
            arr: {
                f: string;
            }[];
            tuple: [first: number, second: { g: Date }];
        };

        type Actual = KeyPath<Obj>;
        type Expected =
            | 'a'
            | 'b'
            | 'c'
            | 'c.d'
            | 'c.e'
            | `c.e.${number}`
            | 'arr'
            | `arr.${number}`
            | `arr.${number}.f`
            | 'tuple'
            | 'tuple.0'
            | 'tuple.1'
            | 'tuple.1.g';

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    it('should extract key paths from a primitive array', () => {
        type Arr = Primitive[];

        type Actual = KeyPath<Arr>;
        type Expected = `${number}`;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    it('should extract key paths from an array', () => {
        type Arr = { a: number }[];

        type Actual = KeyPath<Arr>;
        type Expected = `${number}` | `${number}.a`;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    it('should extract key paths from a tuple', () => {
        type Tuple = [number, { a: string }];

        type Actual = KeyPath<Tuple>;
        type Expected = '0' | '1' | '1.a';

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    it('should not extract key paths from a `Date`', () => {
        type Actual = KeyPath<Date>;
        type Expected = never;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });
});
