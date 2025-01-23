import { describe, expectTypeOf, test } from 'vitest';
import type { Increment } from '../src/increment';

describe('returns an increment of the provided value', () => {
    test('positive int', () => {
        type Actual = Increment<1>;
        type Expected = 2;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    test('0', () => {
        type Actual = Increment<0>;
        type Expected = 1;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    test('"negative" zero', () => {
        type Actual = Increment<-0>;
        type Expected = 1;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    test('negative int', () => {
        type Actual = Increment<-1>;
        type Expected = 'Error: Unsupported numeric value';

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    test.todo('float');
    test.todo('negative float');
});
