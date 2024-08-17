import { describe, expect, expectTypeOf, test } from 'vitest';
import { isDefined } from '../../src';

describe('Checks if a value is defined', () => {
    test('null value', () => {
        const value = null;
        const actual = isDefined(value);
        expect(actual).toBeFalsy();
    });

    test('undefined value', () => {
        const value = undefined;
        const actual = isDefined(value);
        expect(actual).toBeFalsy();
    });

    test('void value', () => {
        const value = void 0;
        const actual = isDefined(value);
        expect(actual).toBeFalsy();
    });

    test('empty object value', () => {
        const value = {};
        const actual = isDefined(value);
        expect(actual).toBeTruthy();
    });

    test('non-empty object value', () => {
        const value = { bob: 'bob' };
        const actual = isDefined(value);
        expect(actual).toBeTruthy();
    });

    test('number value', () => {
        const value = 13;
        const actual = isDefined(value);
        expect(actual).toBeTruthy();
    });

    test('NaN value', () => {
        const value = Number.NaN;
        const actual = isDefined(value);
        expect(actual).toBeTruthy();
    });

    test('Infinity value', () => {
        const value = Number.POSITIVE_INFINITY;
        const actual = isDefined(value);
        expect(actual).toBeTruthy();
    });

    test('-Infinity value', () => {
        const value = Number.NEGATIVE_INFINITY;
        const actual = isDefined(value);
        expect(actual).toBeTruthy();
    });

    test('0 value', () => {
        const value = 0;
        const actual = isDefined(value);
        expect(actual).toBeTruthy();
    });

    test('-0 value', () => {
        const value = -0;
        const actual = isDefined(value);
        expect(actual).toBeTruthy();
    });

    test('string value', () => {
        const value = 'bob';
        const actual = isDefined(value);
        expect(actual).toBeTruthy();
    });

    test('false value', () => {
        const value = false;
        const actual = isDefined(value);
        expect(actual).toBeTruthy();
    });

    test('true value', () => {
        const value = true;
        const actual = isDefined(value);
        expect(actual).toBeTruthy();
    });

    test('symbol value', () => {
        const value = Symbol('bob');
        const actual = isDefined(value);
        expect(actual).toBeTruthy();
    });

    test('randomly defined value', () => {
        let value: string | undefined;

        if (Math.random() > 0.5) {
            value = 'bob';
        }

        if (isDefined(value)) {
            expectTypeOf(value).toBeString();
        } else {
            expectTypeOf(value).toBeUndefined();
        }
    });
});
