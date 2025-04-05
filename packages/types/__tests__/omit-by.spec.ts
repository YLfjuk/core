import { describe, expectTypeOf, test } from 'vitest';
import type { OmitBy } from '../src/omit-by';

describe('Omits keys by condition', () => {
    test('matches', () => {
        type Obj = {
            bob: string;
            bert: string;
            berta: number;
            josh: {
                amount: number;
            };
        };

        type Actual = OmitBy<Obj, string>;
        type Expected = {
            berta: number;
            josh: {
                amount: number;
            };
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

        type Actual = OmitBy<Obj, { amount: number }>;
        type Expected = {
            bob: string;
            bert: string;
            berta: number;
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

        type Actual = OmitBy<Obj, symbol>;
        type Expected = Obj;

        expectTypeOf<Actual>().toMatchTypeOf<Expected>();
    });
});
