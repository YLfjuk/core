import { describe, expectTypeOf, it } from 'vitest';
import type { ToStr } from '../src/to-str';

describe('Stringifies values that can be turned into strings', () => {
    it('should stringify string', () => {
        type Actual = ToStr<'bob'>;
        type Expected = 'bob';

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    it('should stringify number', () => {
        type Actual = ToStr<3>;
        type Expected = '3';

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    it('should stringify bigint', () => {
        type Actual = ToStr<30923987n>;
        type Expected = '30923987';

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    it('should stringify boolean', () => {
        type Actual = ToStr<boolean>;
        type Expected = 'true' | 'false';

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    it('should stringify null', () => {
        type Actual = ToStr<null>;
        type Expected = 'null';

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    it('should stringify undefined', () => {
        type Actual = ToStr<undefined>;
        type Expected = 'undefined';

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    it('should not stringify symbol', () => {
        type Actual = ToStr<symbol>;
        type Expected = never;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    it('should stringify an object that implements `toString(): string`', () => {
        type Actual = ToStr<{ toString(): 'bob' }>;
        type Expected = 'bob';

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });
});
