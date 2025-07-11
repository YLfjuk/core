import { describe, expectTypeOf, it } from 'vitest';
import type { EmptyObject } from '../src/empty-object';

describe('Empty Object', () => {
    it('should match an empty object', () => {
        type Actual = EmptyObject;
        const actual = {};

        // biome-ignore lint/complexity/noBannedTypes: testing types
        type Expected = {};

        expectTypeOf(actual).toExtend<Actual>();
        expectTypeOf<Actual>().toExtend<Expected>();
    });

    it('should not work non-empty objects', () => {
        const nestedDict = {
            bob: '',
        };

        type Expected = EmptyObject;

        expectTypeOf(nestedDict).not.toExtend<Expected>();
    });
});
