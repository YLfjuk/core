import { describe, expectTypeOf, it } from 'vitest';
import type { InverseExtract } from '../src';
import type { Box } from './../src/box';

describe('A type to Box union types', () => {
    it('should match full unions instead of testing each element separately', () => {
        type UnionIsTestedSeparately = InverseExtract<string | number, string>;

        type Actual = InverseExtract<Box<string | number>, Box<string>>;

        type Expected = never;

        expectTypeOf<UnionIsTestedSeparately>().toEqualTypeOf<string>();
        expectTypeOf<UnionIsTestedSeparately>().not.toEqualTypeOf<Expected>();
        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });
});
