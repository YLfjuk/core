import { describe, expectTypeOf, it } from 'vitest';
import type { Whatever } from '../src/whatever';

describe('Suggests a type, but accepts any value', () => {
    it('should accept suggestion', () => {
        type Expected = Whatever<{ bob: 'bob' }>;

        const actual: Expected = { bob: 'bob' };

        expectTypeOf(actual).toExtend<Expected>();
    });

    it('should accept primitive suggestion', () => {
        type Expected = Whatever<6>;

        const actual: Expected = 6;

        expectTypeOf(actual).toExtend<Expected>();
    });

    it('should accept any value', () => {
        type Expected = Whatever<'bob' | 'bert'>;

        const actual: Expected = null;

        expectTypeOf(actual).toExtend<Expected>();
    });
});
