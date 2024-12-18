import { describe, expectTypeOf, it } from 'vitest';
import type { AtLeastOne } from '../src/at-least-one';

describe('requires to pass at least one of the values', () => {
    it('should allow objects with at least one of the fields', () => {
        type Obj = {
            bob: string;
            bert: number;
            berta: {
                check: boolean;
            };
        };

        type Actual = AtLeastOne<Obj>;

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
        expectTypeOf(bobAndBert).toMatchTypeOf<Actual>();
        expectTypeOf(bobAndBerta).toMatchTypeOf<Actual>();
        expectTypeOf(bertAndBerta).toMatchTypeOf<Actual>();
        expectTypeOf(all).toMatchTypeOf<Actual>();

        expectTypeOf(nothing).not.toMatchTypeOf<Actual>();
    });
});
