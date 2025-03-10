import { describe, expectTypeOf, it } from 'vitest';
import type { Suggest } from '../src/suggest';

describe('Suggests a type, but accepts any non-nullable value', () => {
    it('should accept suggestion', () => {
        type Expected = Suggest<{ bob: 'bob' }>;

        const actual: Expected = { bob: 'bob' };

        expectTypeOf(actual).toMatchTypeOf<Expected>();
    });

    it('should accept primitive suggestion', () => {
        type Expected = Suggest<6>;

        const actual: Expected = 6;

        expectTypeOf(actual).toMatchTypeOf<Expected>();
    });

    it('should accept any non nullable value', () => {
        type Expected = Suggest<'bob' | 'bert'>;

        const actual: Expected = 2;

        expectTypeOf(actual).toMatchTypeOf<Expected>();
    });

    it('should not accept nullable value', () => {
        type Expected = Suggest<'bob' | 'bert'>;

        // @ts-expect-error: testing
        const actual = null satisfies Expected;

        expectTypeOf(actual).not.toMatchTypeOf<Expected>();
    });
});
