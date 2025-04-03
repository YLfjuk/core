import { describe, expectTypeOf, suite, test } from 'vitest';
import type { If } from '../src/if';

describe('A wrapper around conditional types', () => {
    suite('should work as a wrapper around `T extends U ? Then : Else`', () => {
        test('truthy condition with else clause', () => {
            type Actual = If<true, 'then', 'else'>;
            type Expected = 'then';

            expectTypeOf<Actual>().toEqualTypeOf<Expected>();
        });

        test('truthy condition w/o else clause', () => {
            type Actual = If<true, 'then'>;
            type Expected = 'then';

            expectTypeOf<Actual>().toEqualTypeOf<Expected>();
        });

        test('falsy condition with else clause', () => {
            type Actual = If<false, 'then', 'else'>;
            type Expected = 'else';

            expectTypeOf<Actual>().toEqualTypeOf<Expected>();
        });

        test('falsy condition w/o else clause', () => {
            type Actual = If<false, 'then'>;
            type Expected = never;

            expectTypeOf<Actual>().toEqualTypeOf<Expected>();
        });
    });
});
