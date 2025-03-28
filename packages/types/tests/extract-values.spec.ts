import { describe, expectTypeOf, test } from 'vitest';
import type { ValueOf } from '../src/value-of';
import type { ExtractValues } from '../src/extract-values';

describe('Extract the values from a nested object', () => {
    test('1-layer-deep object', () => {
        const obj = {
            Bob: 'bob',
            Bert: 'bert',
        };

        type Expected = string;
        type Actual = ExtractValues<typeof obj>;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    test('same as ValueOf for 1-layer-deep object', () => {
        const obj = {
            Bob: 'bob',
            Bert: 'bert',
        };

        type Expected = ValueOf<typeof obj>;
        type Actual = ExtractValues<typeof obj>;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    test('1-layer-deep const object', () => {
        const obj = {
            Bob: 'bob',
            Bert: 'bert',
        } as const;

        type Expected = 'bob' | 'bert';
        type Actual = ExtractValues<typeof obj>;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    test('same as ValueOf for 1-layer-deep const object', () => {
        const obj = {
            Bob: 'bob',
            Bert: 'bert',
        } as const;

        type Expected = ValueOf<typeof obj>;
        type Actual = ExtractValues<typeof obj>;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    test('1-layer-deep const object with Date value', () => {
        const obj = {
            Bob: 'bob',
            now: new Date(),
        } as const;

        type Expected = 'bob' | Date;
        type Actual = ExtractValues<typeof obj>;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    test('nested object', () => {
        const obj = {
            Bob: 'bob',
            Bert: {
                name: 'bert',
                age: -0,
            },
        };

        type Expected = string | number;
        type Actual = ExtractValues<typeof obj>;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    test('nested const object', () => {
        const obj = {
            Bob: 'bob',
            Bert: {
                name: 'bert',
                age: 0,
            },
        } as const;

        type Expected = 'bob' | 'bert' | 0;
        type Actual = ExtractValues<typeof obj>;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    test('nested const object with Date', () => {
        const obj = {
            Bob: 'bob',
            Bert: {
                name: 'bert',
                age: 0,
                birthday: new Date(),
            },
        } as const;

        type Expected = 'bob' | 'bert' | 0 | Date;
        type Actual = ExtractValues<typeof obj>;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    describe('fn return type', () => {
        test('fn, extract = false', () => {
            const fn = () => 'bob';

            type Expected = never;
            type Actual = ExtractValues<typeof fn>;

            expectTypeOf<Actual>().toEqualTypeOf<Expected>();
        });

        test('fn, extract = true', () => {
            const fn = () => 'bob';

            type Expected = string;
            type Actual = ExtractValues<typeof fn, true>;

            expectTypeOf<Actual>().toEqualTypeOf<Expected>();
        });

        test('fn w/ const return type, extract = false', () => {
            const fn = () => 'bob';

            type Expected = never;
            type Actual = ExtractValues<typeof fn>;

            expectTypeOf<Actual>().toEqualTypeOf<Expected>();
        });

        test('fn w/ const return type, extract = true', () => {
            const fn = () => 'bob';

            type Expected = string;
            type Actual = ExtractValues<typeof fn, true>;

            expectTypeOf<Actual>().toEqualTypeOf<Expected>();
        });

        test('object w/ fn, extract = false', () => {
            const obj = {
                Bob: 'bob',
                Bert: {
                    name: 'bert',
                },
                Other: {
                    index: 'other',
                    tmp: () => 0,
                    user(username: string) {
                        return `${this.index}/${username}`;
                    },
                },
            };

            type Expected = string;
            type Actual = ExtractValues<typeof obj>;

            expectTypeOf<Actual>().toEqualTypeOf<Expected>();
        });

        test('object w/ fn, extract = true', () => {
            const obj = {
                Bob: 'bob',
                Bert: {
                    name: 'bert',
                },
                Other: {
                    index: 'other',
                    tmp: () => 0,
                    user(username: string) {
                        return `${this.index}/${username}`;
                    },
                },
            };

            type Expected = string | number;
            type Actual = ExtractValues<typeof obj, true>;

            expectTypeOf<Actual>().toEqualTypeOf<Expected>();
        });

        test('const object w/ fn, extract = false', () => {
            const obj = {
                Bob: 'bob',
                Bert: {
                    name: 'bert',
                },
                Other: {
                    index: 'other',
                    tmp: () => 0,
                    user(username: string) {
                        return `${this.index}/${username}`;
                    },
                },
            } as const;

            type Expected = 'bob' | 'bert' | 'other';
            type Actual = ExtractValues<typeof obj>;

            expectTypeOf<Actual>().toEqualTypeOf<Expected>();
        });

        test('const object w/ fn, extract = true', () => {
            const obj = {
                Bob: 'bob',
                Bert: {
                    name: 'bert',
                },
                Other: {
                    index: 'other',
                    tmp: () => 0,
                    user(username: string) {
                        return `${this.index}/${username}`;
                    },
                },
            } as const;

            type Expected = string | number;
            type Actual = ExtractValues<typeof obj, true>;

            expectTypeOf<Actual>().toEqualTypeOf<Expected>();
        });

        test('const object w/ const fn, extract = false', () => {
            const obj = {
                Bob: 'bob',
                Bert: {
                    name: 'bert',
                },
                Other: {
                    index: 'other',
                    tmp: () => 0 as const,
                    user(username: string) {
                        return `other/${username}` as const;
                    },
                },
            } as const;

            type Expected = 'bert' | 'other' | 'bob';
            type Actual = ExtractValues<typeof obj>;

            expectTypeOf<Actual>().toEqualTypeOf<Expected>();
        });

        test('const object w/ const fn, extract = true', () => {
            const obj = {
                Bob: 'bob',
                Bert: {
                    name: 'bert',
                },
                Other: {
                    index: 'other',
                    tmp: () => 0 as const,
                    user(username: string) {
                        return `other/${username}` as const;
                    },
                },
            } as const;

            type Expected = 0 | 'bert' | 'other' | 'bob' | `other/${string}`;
            type Actual = ExtractValues<typeof obj, true>;

            expectTypeOf<Actual>().toEqualTypeOf<Expected>();
        });
    });
});
