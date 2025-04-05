import { describe, expectTypeOf, test } from 'vitest';
import type { PickOptional } from '../src/pick-optional';

describe('Extracts optional properties from a given type `T`', () => {
    test('Extract only optional properties', () => {
        type Input = { a: number; b?: string; c?: boolean; d: string };
        type Expected = { b?: string; c?: boolean };
        type Result = PickOptional<Input>;
        expectTypeOf<Result>().toEqualTypeOf<Expected>();
    });

    test('No optional properties should result in an empty object type', () => {
        type Input = { a: number; b: string };
        type Result = PickOptional<Input>;
        expectTypeOf<Result>().toEqualTypeOf<NonNullable<unknown>>();
    });

    test('All optional properties should remain unchanged', () => {
        type Input = { a?: number; b?: string };
        type Result = PickOptional<Input>;
        expectTypeOf<Result>().toEqualTypeOf<Input>();
    });

    test('Works with mixed required and optional properties', () => {
        type Input = { x: string; y?: number; z: boolean; w?: Date };
        type Expected = { y?: number; w?: Date };
        type Result = PickOptional<Input>;
        expectTypeOf<Result>().toEqualTypeOf<Expected>();
    });

    test('Works with optional undefined fields', () => {
        type Input = {
            x: string;
            y?: number | undefined;
            z: boolean;
            w?: Date;
        };
        type Expected = { y?: number | undefined; w?: Date };
        type Result = PickOptional<Input>;
        expectTypeOf<Result>().toEqualTypeOf<Expected>();
    });
});
