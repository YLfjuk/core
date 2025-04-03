import { describe, expectTypeOf, test } from 'vitest';
import type { Guard } from '../src/guard';

type A = { a: number };
type B = { b: string };
type C = { c: boolean };
type D = { d: null };

describe('A guard wrapper for a conditional check', () => {
    test('T extends TGuard - should return OnGuard', () => {
        type Result = Guard<A, 'OnGuard', B, 'OnCheck', 'OnNotCheck', A>;
        expectTypeOf<Result>().toEqualTypeOf<'OnGuard'>();
    });

    test('T does not extend TGuard but extends TCheck - should return OnCheck', () => {
        type Result = Guard<A, 'OnGuard', B, 'OnCheck', 'OnNotCheck', B>;
        expectTypeOf<Result>().toEqualTypeOf<'OnCheck'>();
    });

    test('T does not extend either TGuard or TCheck - should return OnNotCheck', () => {
        type Result = Guard<A, 'OnGuard', B, 'OnCheck', 'OnNotCheck', C>;
        expectTypeOf<Result>().toEqualTypeOf<'OnNotCheck'>();
    });

    test('T is a subtype of TGuard - should return OnGuard', () => {
        type SubA = { a: number; extra: string };
        type Result = Guard<A, 'OnGuard', B, 'OnCheck', 'OnNotCheck', SubA>;
        expectTypeOf<Result>().toEqualTypeOf<'OnGuard'>();
    });

    test('T is unrelated to TGuard and TCheck - should return OnNotCheck', () => {
        type Result = Guard<A, 'OnGuard', B, 'OnCheck', 'OnNotCheck', D>;
        expectTypeOf<Result>().toEqualTypeOf<'OnNotCheck'>();
    });

    test('Guard against dates', () => {
        type Result = Guard<
            Date,
            'OnGuard',
            object,
            'OnCheck',
            'OnNotCheck',
            Date
        >;

        expectTypeOf<Result>().toEqualTypeOf<'OnGuard'>();
    });
});
