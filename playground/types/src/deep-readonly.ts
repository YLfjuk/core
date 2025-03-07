import type { Equal } from '@ylfjuk-core/types';

// TODO: add a date / functions guard?
export type DeepReadonly<T> = T extends object
    ? {
          readonly [K in keyof T]: DeepReadonly<T[K]>;
      }
    : T;

// region Tests
type Test3_1 = DeepReadonly<2>;
//   ^?

type Test3_2 = DeepReadonly<'bob'>;
//   ^?

type Test3_3 = DeepReadonly<string>;
//   ^?

type Test3_4 = DeepReadonly<['bob', 'bert']>;
//   ^?

type Test3_5 = DeepReadonly<['bob', { key: 'bert' }]>;
//   ^?

type Test3_6 = DeepReadonly<{
    //  ^?
    key: 'val';
    deep: {
        deeper: {
            deepest: true;
        };
    };
}>;

type Test3_7 = Equal<DeepReadonly<Date>, Readonly<Date>>;
//   ^?

type Readonly_Date = Readonly<Date>;
//   ^?

type Deep_Readonly_Date = DeepReadonly<Date>;
//   ^?
