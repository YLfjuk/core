import { describe, expectTypeOf, it, test } from 'vitest';
import type { Prettify } from '../src/prettify';
import type { Primitive } from '../src/primitive';

describe('Prettify the type', () => {
    test('simple union', () => {
        type Bob = {
            Bob: string;
        };

        type Bert = {
            Bert: string;
        };

        type Both = Bob & Bert;

        type Expected = {
            Bob: string;
            Bert: string;
        };

        type Actual = Prettify<Both>;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    test('complex union', () => {
        type Bob = {
            Bob: string;
        };

        type Bert = {
            Bert: string;
        };

        type Person = {
            name: string;
            age: number;
        };

        type Both = (Bob | Bert) & Person;

        type Expected =
            | {
                  Bob: string;
                  name: string;
                  age: number;
              }
            | {
                  Bert: string;
                  name: string;
                  age: number;
              };

        type Actual = Prettify<Both>;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    test('deeply nested objects', () => {
        type Bob = {
            Bob: string;
        };

        type Bert = {
            Bert: string;
        };

        type Berta = {
            Berta: true;
        };

        type NestedObject =
            | {
                  person: Bob | Bert;
                  nested: {
                      identity: Bob | Bert | (Berta & { birthdate: Date });
                  };
              }
            | {
                  person: Bob & Bert;
              };

        type Actual = Prettify<NestedObject>;

        type Expected =
            | {
                  person:
                      | {
                            Bob: string;
                        }
                      | {
                            Bert: string;
                        };
                  nested: {
                      identity:
                          | {
                                Bob: string;
                            }
                          | {
                                Bert: string;
                            }
                          | {
                                Berta: true;
                                birthdate: Date;
                            };
                  };
              }
            | {
                  person: {
                      Bob: string;
                      Bert: string;
                  };
              };

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    it('should not expand a `Date` type', () => {
        type Actual = Prettify<Date>;

        type Expected = Date;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    it('should not expand a field `Date` type', () => {
        type Actual = Prettify<{
            date: Date;
        }>;

        type Expected = {
            date: Date;
        };

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });

    it('should not expand a `Primitive` type', () => {
        type Actual = Prettify<Primitive>;

        type Expected = Primitive;

        expectTypeOf<Actual>().toEqualTypeOf<Expected>();
    });
});
