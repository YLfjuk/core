import { describe, expectTypeOf, test } from 'vitest';
import type { Join } from '../src/join';

describe('Joins together things that can be stringified', () => {
    test('strings', () => {
        type Arr = ['bob_', 'bert_', 'berta'];

        type Actual = Join<Arr>;
        type Expected = 'bob_bert_berta';

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    test('strings with custom separator', () => {
        type Arr = ['bob', 'bert', 'berta'];

        type Actual = Join<Arr, { separator: '_' }>;
        type Expected = 'bob_bert_berta';

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    test('numbers', () => {
        type Arr = ['1', '2', '3'];

        type Actual = Join<Arr, { separator: '.' }>;
        type Expected = '1.2.3';

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    test('booleans', () => {
        type Arr = [true, false];

        type Actual = Join<Arr, { separator: '/' }>;
        type Expected = 'true/false';

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    test('bigints', () => {
        type Arr = [121421412n, 89734n];

        type Actual = Join<Arr, { separator: '+' }>;
        type Expected = '121421412+89734';

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    test('nullish', () => {
        type Arr = [null, undefined];

        type Actual = Join<Arr, { separator: ' | ' }>;
        type Expected = 'null | undefined';

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    test('mix', () => {
        type Arr = [null, 13, 'bob', true, undefined];

        type Actual = Join<Arr, { separator: ' | ' }>;
        type Expected = 'null | 13 | bob | true | undefined';

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    test('stringifiable object', () => {
        type Arr = [{ toString(): 'bob' }];
        type Arr2 = [{ toString(): 'bob' }, { toString: () => 'bert' }];

        type Actual = Join<Arr, { separator: ' | ' }>;
        type Actual2 = Join<Arr2, { separator: ' | ' }>;
        type Expected = 'bob';
        type Expected2 = 'bob | bert';

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
        expectTypeOf<Actual2>().toEqualTypeOf<Expected2>();
    });
});
