import { describe, expectTypeOf, it } from 'vitest';
import type { OmitFunctions } from '../src/omit-functions';

describe('Omits the set of properties that are functions', () => {
    it('should omit the functions from an object', () => {
        const actual = {
            bob: 'bob',
            bert: 'bert',

            berta() {
                return 'berta';
            },

            another: () => 'another',
        };

        type Actual = OmitFunctions<typeof actual>;
        type Expected = {
            bob: string;
            bert: string;
        };

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    it('should omit the functions from a class and only show non-private properties', () => {
        class Class {
            width!: number;
            height!: number;

            #private: 'hidden';

            getWidth() {
                return this.width;
            }

            getHeight = () => this.height;
        }

        const instance = new Class();

        type ActualClass = OmitFunctions<Class>;
        type ActualInstance = OmitFunctions<typeof instance>;

        type ExpectedClass = {
            width: number;
            height: number;
        };

        type ExpectedInstance = {
            width: number;
            height: number;
        };

        expectTypeOf<ActualClass>().toEqualTypeOf<ExpectedClass>();
        expectTypeOf<ActualInstance>().toEqualTypeOf<ExpectedInstance>();
    });

    it('should strip function', () => {
        const fn = () => {
            return 'bob';
        };

        type Actual = OmitFunctions<typeof fn>;

        // biome-ignore lint/complexity/noBannedTypes: testing
        type Expected = {};

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });
});
