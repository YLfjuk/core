import { describe, expect, expectTypeOf, it } from 'vitest';
import { bool } from './../src/bool';

describe('bool', () => {
    it.each([
        false,
        0,
        '',
        null,
        undefined,
        0n,
        Number.NaN,
        1,
        1.2,
        Math.random(),
        new Date(),
        'str',
        Symbol(),
        Number.NEGATIVE_INFINITY,
        true,
        1n,
        {},
        [],
        { key: undefined },
        [null],
    ])('should have the same result as `Boolean`', (value) => {
        const actual = bool(value);
        const expected = Boolean(value);

        expect(actual).toBe(expected);
    });

    it('should narrow down the type correctly', () => {
        const arr = [
            false,
            0,
            '',
            null,
            undefined,
            0n,
            1,
            1.2,
            'str',
            new Date(),
            Symbol(),
            true,
            1n,
            [],
        ] as const;

        const actual = arr.filter(bool);

        type Actual = typeof actual;

        type Expected = (
            | true
            | symbol
            | 1
            | 1.2
            | Date
            | 'str'
            | 1n
            | readonly []
        )[];

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    it('`Boolean` should not narrow down the type correctly', () => {
        const arr = [
            false,
            0,
            '',
            null,
            undefined,
            0n,
            1,
            1.2,
            'str',
            new Date(),
            Symbol(),
            true,
            1n,
            [],
        ] as const;

        const actual = arr.filter(Boolean);

        type Actual = typeof actual;

        type Expected = (
            | true
            | symbol
            | 1
            | 1.2
            | Date
            | 'str'
            | 1n
            | readonly []
        )[];

        expectTypeOf<Actual>().not.toEqualTypeOf<Expected>();
    });
});
