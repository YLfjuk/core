import { describe, expect, it } from 'vitest';
import { InfiniteObject } from './../src/infinite-object';

describe('Object that can be accessed ad infinitum', () => {
    it('can be accessed infinitely', () => {
        const expected = InfiniteObject;
        const actual = InfiniteObject.a.b.c;

        expect(actual).toBe(expected);
    });

    it('can handle function calls', () => {
        const expected = InfiniteObject;
        const actual = InfiniteObject.a.b().c;

        expect(actual).toBe(expected);
    });

    it('can handle class calls', () => {
        const expected = InfiniteObject;
        const actual = new InfiniteObject();

        expect(actual).toBe(expected);
    });

    it('can receive any argument when used as callback', () => {
        const expected = InfiniteObject;
        const actual = InfiniteObject({ a: 2 }, 43, 5, Boolean(1), 'str');

        expect(actual).toBe(expected);
    });

    it('can receive any argument when used as class', () => {
        const expected = InfiniteObject;
        const actual = new InfiniteObject({ a: 2 }, 43, 5, Boolean(1), 'str');

        expect(actual).toBe(expected);
    });
});
