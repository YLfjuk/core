import { describe, expectTypeOf, test } from 'vitest';
import type { PickBy } from '../src/pick-by';
import type { EmptyObject } from '../src/empty-object';

describe('pick fields of an object if they match type', () => {
    test('matches', () => {
        type Obj = {
            bob: string;
            bert: string;
            berta: number;
            josh: {
                amount: number;
            };
        };

        type Actual = PickBy<Obj, string>;
        type Expected = {
            bob: string;
            bert: string;
        };

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    test('matches obj', () => {
        type Obj = {
            bob: string;
            bert: string;
            berta: number;
            josh: {
                amount: number;
            };
        };

        type Actual = PickBy<Obj, { amount: number }>;
        type Expected = {
            josh: {
                amount: number;
            };
        };

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    test('nothing matches', () => {
        type Obj = {
            bob: string;
            bert: string;
            berta: number;
            josh: {
                amount: number;
            };
        };

        type Actual = PickBy<Obj, symbol>;
        type Expected = EmptyObject;

        expectTypeOf<Actual>().toMatchTypeOf<Expected>();
    });
});
