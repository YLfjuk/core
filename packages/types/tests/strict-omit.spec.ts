import type { StrictOmit } from '../src';
import { describe, test, expectTypeOf } from 'vitest';

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
