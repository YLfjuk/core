import type { Primitive } from '@ylfjuk-core/types';

export type Stringifiable =
    | Exclude<Primitive, symbol>
    | {
          toString(): string;
      };

// export type OE_Stringify<T extends Stringifiable> = T extends Extract<
//     Stringifiable,
//     Primitive
// >
//     ? `${T}`
//     : T['toString']; //? Why is the `never` required??

// export type Stringify<T extends Stringifiable> = T extends Extract<
//     Stringifiable,
//     object
// >
//     ? ReturnType<T['toString']>
//     : `${T}`;

// type Test<T extends string | { bob: () => string }> = T extends string
//     ? `${T}-bob`
//     : T['bob'];
