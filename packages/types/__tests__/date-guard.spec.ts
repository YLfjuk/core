import { describe, test } from 'vitest';
import { expectTypeOf } from 'vitest';
import type { DateGuard } from '../src/date-guard';

type A = { a: number };
type B = { b: string };

describe('A guard wrapper for the `Date` type', () => {
    test('T is Date - should return OnDate', () => {
        type Result = DateGuard<Date, B, 'OnCheck', 'OnNotCheck', 'IsDate'>;
        expectTypeOf<Result>().toEqualTypeOf<'IsDate'>();
    });

    test('T extends TCheck - should return OnCheck', () => {
        type Result = DateGuard<A, A, 'OnCheck', 'OnNotCheck'>;
        expectTypeOf<Result>().toEqualTypeOf<'OnCheck'>();
    });

    test('T does not extend Date or TCheck - should return OnNotCheck', () => {
        type Result = DateGuard<A, B, 'OnCheck', 'OnNotCheck'>;
        expectTypeOf<Result>().toEqualTypeOf<'OnNotCheck'>();
    });
});
