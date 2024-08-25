import { describe, expectTypeOf, test } from 'vitest';
import type { MappedEnum, ValueOf } from '../src';

describe('Map an enum into an object', () => {
    test('standalone', () => {
        type Enum = 'bob' | 'bert' | 'bobette' | 'big berta';

        type Expected = {
            bob: 'bob';
            bert: 'bert';
            bobette: 'bobette';
            'big berta': 'big berta';
        };

        type Actual = MappedEnum<Enum>;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    test('recreate from ValueOf<T>', () => {
        const Enum = {
            BOB: 'BOB',
            BERT: 'BERT',
        } as const;

        type Enum = ValueOf<typeof Enum>;

        type Expected = {
            BOB: 'BOB';
            BERT: 'BERT';
        };

        type Actual = MappedEnum<Enum>;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });
});
