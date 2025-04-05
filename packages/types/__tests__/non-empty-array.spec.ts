import { describe, expectTypeOf, it } from 'vitest';
import type { NonEmptyArray } from '../src/non-empty-array';

describe('Ensure that the array is populated with at least one element', () => {
    it('should have a default T value of `unknown`', () => {
        type Expected = NonEmptyArray<unknown>;
        type Actual = NonEmptyArray;

        expectTypeOf<Actual>().toExtend<Expected>();
    });

    it('should allow an array with at least one element', () => {
        type Expected = NonEmptyArray;
        const singleElement = [1] satisfies Expected;

        expectTypeOf(singleElement).toExtend<Expected>();
    });

    it('should allow an array with multiple elements', () => {
        type Expected = NonEmptyArray;
        const multipleElements = [1, 2, 3] satisfies Expected;

        expectTypeOf(multipleElements).toExtend<Expected>();
    });

    it('should not allow an empty array', () => {
        type Expected = NonEmptyArray;
        const emptyArray = [] as [];

        expectTypeOf(emptyArray).not.toExtend<Expected>();
    });
});
