import { describe, expect, test } from 'vitest';
import { noop } from '../src/noop';

describe('Function that accepts any parameter(s) and returns undefined', () => {
    test('no params', () => {
        const actual = noop();
        expect(actual).toBeUndefined();
    });

    test('null value', () => {
        const value = null;
        const actual = noop(value);
        expect(actual).toBeUndefined();
    });

    test('undefined value', () => {
        const value = undefined;
        const actual = noop(value);
        expect(actual).toBeUndefined();
    });

    test('void value', () => {
        const value = void 0;
        const actual = noop(value);
        expect(actual).toBeUndefined();
    });

    test('values', () => {
        const actual = noop(
            1,
            2,
            3,
            null,
            [1, 2, 3, undefined],
            '3252345',
            new Date()
        );

        expect(actual).toBeUndefined();
    });
});
