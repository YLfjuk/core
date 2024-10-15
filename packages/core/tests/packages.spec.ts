import { describe, expect, expectTypeOf, test } from 'vitest';
import type { FN } from '../src';

describe('testing packages', () => {
    test('testing @ylfjuk-core/types', async () => {
        expectTypeOf<FN>().toEqualTypeOf<FN>();
    });

    test('testing @ylfjuk-core/utils', async () => {
        const { isDefined, noop } = await import('../src');

        expect(isDefined).toBeDefined();
        expect(noop).toBeDefined();
    });
});
