import { describe, expect, expectTypeOf, it, suite, test } from 'vitest';
import type { Result, ResultData, ResultError } from './../src/result';

describe('Result of a function call. Either successful w/ data, or not w/ a reason', () => {
    suite('Result type', () => {
        it('should contain data when success is set to `true`', () => {
            const successfulResult: Result<number> = { success: true, data: 5 };

            expect(successfulResult.success).toBe(true);
            expect(successfulResult.data).toBeTypeOf('number');
        });

        it('should contain reason when success is set to `false`', () => {
            const successfulResult: Result<number, string> = {
                success: false,
                reason: 'a reason',
            };

            expect(successfulResult.success).toBe(false);
            expect(successfulResult.reason).toBeTypeOf('string');
        });
    });

    suite('ResultError type', () => {
        it('should return the type of the reason property of the result', () => {
            type Expected = string;
            type Actual = ResultError<Result<unknown, string>>;

            expectTypeOf<Actual>().toEqualTypeOf<Expected>();
        });
    });

    suite('ResultData type', () => {
        it('should return the type of the data property of the result', () => {
            type Expected = number;
            type Actual = ResultData<Result<number>>;

            expectTypeOf<Actual>().toEqualTypeOf<Expected>();
        });
    });
});
