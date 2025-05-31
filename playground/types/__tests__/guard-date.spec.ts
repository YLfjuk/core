import { describe, expectTypeOf, test } from 'vitest';
import type { GuardDate } from '../src/guard-date';

type A = { a: number };
type B = { b: string };

describe('A guard wrapper for the `Date` type', () => {
    test('T is Date - should return OnDate', () => {
        type Result = GuardDate<Date, B, 'OnCheck', 'OnNotCheck', 'IsDate'>;
        expectTypeOf<Result>().toEqualTypeOf<'IsDate'>();
    });

    test('T extends TCheck - should return OnCheck', () => {
        type Result = GuardDate<A, A, 'OnCheck', 'OnNotCheck'>;
        expectTypeOf<Result>().toEqualTypeOf<'OnCheck'>();
    });

    test('T does not extend Date or TCheck - should return OnNotCheck', () => {
        type Result = GuardDate<A, B, 'OnCheck', 'OnNotCheck'>;
        expectTypeOf<Result>().toEqualTypeOf<'OnNotCheck'>();
    });

    test.todo('should work on the `never` type', () => {
        type Result = GuardDate<never, 'Check', 'OnCheck', 'OnNotCheck'>;
        // @ts-expect-error: fails
        expectTypeOf<Result>().not.toEqualTypeOf<Date>();
    });
});
