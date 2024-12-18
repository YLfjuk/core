import { describe, expectTypeOf, test } from 'vitest';
import type { IsTuple } from '../src/is-tuple';

describe('returns if an array is a tuple', () => {
    test('array', () => {
        const arr = [1, 2, 3];

        type Actual = IsTuple<typeof arr>;
        type Expected = false;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    test('const array', () => {
        const arr = [1, 2, 3] as const;

        type Actual = IsTuple<typeof arr>;
        type Expected = true;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });
});
