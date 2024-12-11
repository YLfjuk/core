import { describe, expectTypeOf, it } from 'vitest';
import type { EmptyObject } from '../src/empty-object';

describe('Deep Dictionary', () => {
    it('should match an empty object', () => {
        type Actual = EmptyObject;
        const actual = {};

        // biome-ignore lint/complexity/noBannedTypes: testing types
        type Expected = {};

        expectTypeOf(actual).toMatchTypeOf<Actual>();
        expectTypeOf<Actual>().toMatchTypeOf<Expected>();
    });

    it('should not work non-empty objects', () => {
        const nestedDict = {
            bob: '',
        };

        type Expected = EmptyObject;

        expectTypeOf(nestedDict).not.toMatchTypeOf<Expected>();
    });
});
