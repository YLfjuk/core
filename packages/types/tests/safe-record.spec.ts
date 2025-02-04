import { describe, expectTypeOf, it } from 'vitest';
import type { SafeRecord } from './../src/safe-record';

describe('A safe way to access a record when `noUncheckedIndexedAccess` is turned off', () => {
    it('should be the same as adding `| undefined` to a regular record', () => {
        type Actual = SafeRecord<string, number>;
        type Expected = Record<string, number | undefined>;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    it('should return `T | undefined` when accessed', () => {
        type Expected = string | undefined;

        const safeRecord: SafeRecord<string, string> = {
            key: 'value',
        };

        const existingProperty = safeRecord.key;
        const unknownProperty = safeRecord.bob;

        expectTypeOf(existingProperty).toEqualTypeOf<Expected>();
        expectTypeOf(unknownProperty).toEqualTypeOf<Expected>();
    });
});
