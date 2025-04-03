import { describe, expectTypeOf, it } from 'vitest';
import type { PartialDeep } from '../src/partial-deep';

describe('PartialDeep Type Tests', () => {
    it('should recursively make properties optional', () => {
        type Input = { a: number; nested: { b: string; c: boolean } };
        type Result = PartialDeep<Input>;
        type Expected = { a?: number; nested?: { b?: string; c?: boolean } };
        expectTypeOf<Result>().toEqualTypeOf<Expected>();
    });

    it('should preserve Date types', () => {
        type Input = { timestamp: Date; data: { createdAt: Date } };
        type Result = PartialDeep<Input>;
        type Expected = { timestamp?: Date; data?: { createdAt?: Date } };
        expectTypeOf<Result>().toEqualTypeOf<Expected>();
    });
});
