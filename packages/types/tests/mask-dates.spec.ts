import { describe, expectTypeOf, it } from 'vitest';
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
});
