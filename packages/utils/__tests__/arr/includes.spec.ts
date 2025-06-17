import { describe, expect, it, test } from 'vitest';
import { arrIncludes } from '../../src/arr/includes';

describe('arr/includes', () => {
    test.each([
        [[1, 2, 3], 2],
        [[1, 2, 3], 4],
    ])('should include %p in array %p', (arr, el) => {
        const expected = arr.includes(el);
        const actual = arrIncludes(arr, el);

        expect(actual).toBe(expected);
    });

    it('should allow to include elements that are of different type', () => {
        const arr = [1, 2, 3];

        //? Works fine
        expect(arrIncludes(arr, true)).toBe(false);

        // @ts-expect-error: Argument of type 'false' is not assignable to parameter of type 'true'.
        expect(arr.includes(true)).toBe(false);
    });
});
