import { describe, expectTypeOf, it } from 'vitest';
import type { DeepDict } from '../src/deep-dict';

describe('Deep Dictionary', () => {
    it('should allow nested dicts', () => {
        const dict = {
            bob: 1,
        };

        const nestedDict = {
            bob: 1,
            bert: {
                berta: 2,
            },
        };

        type Expected = DeepDict<number>;

        expectTypeOf(dict).toExtend<Expected>();
        expectTypeOf(nestedDict).toExtend<Expected>();
    });

    it('should work with never', () => {
        const dict = {};

        const nestedDict = {
            bob: {},
        };

        type Expected = DeepDict<never>;

        expectTypeOf(dict).toExtend<Expected>();
        expectTypeOf(nestedDict).toExtend<Expected>();
    });
});
