import { describe, expectTypeOf, test } from 'vitest';
import type { StrictOmit } from '../src/strict-omit';

describe('Strict Omit', () => {
    test('type omit keys of object from object', () => {
        const obj = {
            Bob: 'bob',
            Bert: 'bert',
        };

        type Expected = {
            Bob: string;
        };

        type Actual = StrictOmit<typeof obj, 'Bert'>;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });
});
