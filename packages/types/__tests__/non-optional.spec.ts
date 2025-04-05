import { describe, expectTypeOf, it } from 'vitest';
import type { NonOptional } from '../src/non-optional';

describe('Makes optional keys required while preserving their nullability', () => {
    it('should preserve nullability', () => {
        type Actual = NonOptional<{
            bob: 'bob';
            bert?: string | undefined;
            berta?: boolean;
        }>;

        type Expected = {
            bob: 'bob';
            bert: string | undefined;
            berta: boolean;
        };

        // @ts-expect-error: still accepts undefined even when type doesn't
        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });
});
