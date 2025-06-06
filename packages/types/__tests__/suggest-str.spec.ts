import { describe, expectTypeOf, it } from 'vitest';
import type { SuggestStr } from '../src/suggest-str';

describe('Suggests strings, but accepts any string', () => {
    it('should accept suggestion', () => {
        type Expected = SuggestStr<'bob' | 'bert'>;

        const actual: Expected = 'bob';

        expectTypeOf(actual).toExtend<Expected>();
    });

    it('should accept any string', () => {
        type Expected = SuggestStr<'bob' | 'bert'>;

        const actual: Expected = 'berta';

        expectTypeOf(actual).toExtend<Expected>();
    });
});
