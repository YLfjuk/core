import { describe, expectTypeOf, it } from 'vitest';
import { KeyPath } from '../src/key-path';

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
});
