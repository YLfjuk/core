import { describe, expectTypeOf, it, test } from 'vitest';
import type { MaskDates } from '../src/mask-dates';

describe('Masks the `Date` type as a `string`', () => {
    it('should mask all `Date` types as `string`', () => {
        type Actual = MaskDates<{
            date: Date;
            nested: {
                date: Date;
            };
        }>;

        type Expected = {
            date: string;
            nested: {
                date: string;
            };
        };

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    test('Date should be replaced with string', () => {
        type Result = MaskDates<Date>;
        expectTypeOf<Result>().toEqualTypeOf<string>();
    });

    test('Nested Date fields should be replaced', () => {
        type Expected = { createdAt: string; name: string };
        type Result = MaskDates<{ createdAt: Date; name: string }>;
        expectTypeOf<Result>().toEqualTypeOf<Expected>();
    });

    test('Deeply nested Date fields should be replaced', () => {
        type Expected = {
            timestamps: { start: string; end: string };
            value: number;
        };
        type Result = MaskDates<{
            timestamps: { start: Date; end: Date };
            value: number;
        }>;
        expectTypeOf<Result>().toEqualTypeOf<Expected>();
    });

    test('Non-Date fields should remain unchanged', () => {
        type Input = { date: string; nested: { d: string } };
        type Result = MaskDates<Input>;
        expectTypeOf<Result>().toEqualTypeOf<Input>();
    });
});
