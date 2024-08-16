import type { Prettify } from '../src';
import { describe, test } from 'vitest';
import { expectTypeOf } from 'expect-type';

describe('Value Of', () => {
    test('simple union', () => {
        type Bob = {
            Bob: string;
        };

        type Bert = {
            Bert: string;
        };

        type Both = Bob & Bert;

        type Expected = {
            Bob: string;
            Bert: string;
        };

        type Actual = Prettify<Both>;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    test('type contains values of const object', () => {
        type Bob = {
            Bob: string;
        };

        type Bert = {
            Bert: string;
        };

        type Person = {
            name: string;
            age: number;
        };

        type Both = (Bob | Bert) & Person;

        type Expected =
            | {
                  Bob: string;
                  name: string;
                  age: number;
              }
            | {
                  Bert: string;
                  name: string;
                  age: number;
              };

        type Actual = Prettify<Both>;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });
});
