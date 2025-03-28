import { describe, expectTypeOf, it } from 'vitest';
import type { Stringify } from '../src';

describe('Stringifies values that can be stringified', () => {
    it('should stringify string', () => {
        type Actual = Stringify<'bob'>;
        type Expected = 'bob';

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    it('should stringify number', () => {
        type Actual = Stringify<3>;
        type Expected = '3';

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    it('should stringify bigint', () => {
        type Actual = Stringify<30923987n>;
        type Expected = '30923987';

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    it('should stringify boolean', () => {
        type Actual = Stringify<boolean>;
        type Expected = 'true' | 'false';

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    it('should stringify null', () => {
        type Actual = Stringify<null>;
        type Expected = 'null';

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    it('should stringify undefined', () => {
        type Actual = Stringify<undefined>;
        type Expected = 'undefined';

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    it('should not stringify symbol', () => {
        type Actual = Stringify<symbol>;
        type Expected = never;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    it('should stringify an object that implements `toString(): string`', () => {
        type Actual = Stringify<{ toString(): 'bob' }>;
        type Expected = 'bob';

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });
});
