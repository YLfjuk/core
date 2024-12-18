import { describe, expectTypeOf, it } from 'vitest';
import type { ExactlyOne } from '../src/exactly-one';

describe('requires to pass exactly one of the values', () => {
    it('should allow objects with exactly one of the fields', () => {
        type Obj = {
            bob: string;
            bert: number;
            berta: {
                check: boolean;
            };
        };

        type Actual = ExactlyOne<Obj>;

        const exactlyBob = { bob: '13' };
        const exactlyBert = { bert: 13 };
        const exactlyBerta = {
            berta: {
                check: true,
            },
        };

        const bobAndBert = {
            bob: '13',
            bert: 13,
        };

        const bobAndBerta = {
            bob: '13',
            berta: {
                check: true,
            },
        };

        const bertAndBerta = {
            bert: 13,
            berta: {
                check: true,
            },
        };

        const all = {
            bob: '13',
            bert: 13,
            berta: {
                check: true,
            },
        };

        const nothing = {};

        expectTypeOf(exactlyBob).toMatchTypeOf<Actual>();
        expectTypeOf(exactlyBert).toMatchTypeOf<Actual>();
        expectTypeOf(exactlyBerta).toMatchTypeOf<Actual>();

        expectTypeOf(bobAndBert).not.toMatchTypeOf<Actual>();
        expectTypeOf(bobAndBerta).not.toMatchTypeOf<Actual>();
        expectTypeOf(bertAndBerta).not.toMatchTypeOf<Actual>();
        expectTypeOf(all).not.toMatchTypeOf<Actual>();
        expectTypeOf(nothing).not.toMatchTypeOf<Actual>();
    });
});
