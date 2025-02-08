import type {
    ExtractLiteral,
    LessThan,
    LessThanEqual,
} from '@ylfjuk-core/types';
import type { Length } from './length';
import type { Split } from './split';

// import { describe, expectTypeOf, test } from 'vitest';
// import type { SplitFloat } from '../src/playground/split-float';

// describe('returns a tuple of [Int, Frac] from a number', () => {
//     test('positive int', () => {
//         type Actual = SplitFloat<1>;
//         type Expected = [1, 0];

//         expectTypeOf<Actual>().toEqualTypeOf<Expected>();
//     });

//     test('0', () => {
//         type Actual = SplitFloat<0>;
//         type Expected = [0, 0];

//         expectTypeOf<Actual>().toEqualTypeOf<Expected>();
//     });

//     test('negative int', () => {
//         type Actual = SplitFloat<-1>;
//         type Expected = [-1, 0];

//         expectTypeOf<Actual>().toEqualTypeOf<Expected>();
//     });

//     test('positive float', () => {
//         type Actual = SplitFloat<1.5>;
//         type Expected = [1, 5];

//         expectTypeOf<Actual>().toEqualTypeOf<Expected>();
//     });

//     test.fails('positive float', () => {
//         type Actual = SplitFloat<1.05>;
//         type Expected = [1, 05???];

//         expectTypeOf<Actual>().toEqualTypeOf<Expected>();
//     });
// });

export type SplitFloat<N extends number> =
    `${N}` extends `${infer Int extends number}.${infer Frac}`
        ? [Int, FracPad<Frac>]
        : [N, [0, 0]];

type FracPad<Frac extends string> = `${Frac}` extends `0${string}`
    ? [CountPadding<Frac, '0'>, ExtractLiteral<TrimLeadingZeros<Frac>>]
    : [0, ExtractLiteral<Frac>];

// region Attempt
// TODO: make this work
export type SplitFloat2<N extends number> =
    `${N}` extends `${infer Int extends number}.${infer Frac}`
        ? [Int, FracPad2<Frac>]
        : [N, 0];

type FracPad2<Frac extends string> = Frac extends `0${string}`
    ? `${TrimLeadingZeros<Frac>}e-${CountPadding<Frac, '0'>}`
    : ExtractLiteral<Frac>;

type Testttt = 7e-2 extends undefined ? true : false;
//   ^?

const test = 7e-3;
//    ^?

type MakeThisWork = ExtractLiteral<'3e-2'>;
//   ^?

type Tester = '3e-2' extends `${infer U extends number}` ? U : never;
//   ^?

type JustInCase = 3e-2 extends infer U extends number ? U : never;
//   ^?

type Test = SplitFloat<1.006>;
//   ^?

type Test2 = SplitFloat2<1.006>;
//   ^?

// Type utility to get length of a string tuple

// Count occurrences in a string
export type CountPadding<
    Str extends string,
    Char extends string,
    Acc extends unknown[] = []
> = Str extends `${Char}${infer Rest}`
    ? CountPadding<Rest, Char, [...Acc, Length<Acc>]>
    : Length<Acc>;

// Type to ensure a string is a valid number
export type IsNumber<T extends string> = T extends `${number}` ? true : false;

// Extract numeric value from string
export type ExtractNumber<T extends string> =
    T extends `${infer N extends number}` ? N : number;

// Type to split a string at a specific character
// export type Split<
//     S extends string,
//     D extends string
// > = S extends `${infer T}${D}${infer U}` ? [T, U] : [S, never];

// Type to trim leading zeros
export type TrimLeadingZeros<S extends string> = S extends '0'
    ? S
    : S extends `0${infer Rest}`
    ? TrimLeadingZeros<Rest>
    : S;

export type ZeroPaddedNumber<S extends string> = S extends `${'0'}${infer Rest}`
    ? IsNumber<Rest> extends true
        ? [CountPadding<S, '0'>, TrimLeadingZeros<S>]
        : never
    : IsNumber<S> extends true
    ? [0, S]
    : never;

type Float1 = 5.0076;
type Float2 = 5.00016;
type Float3 = 5.0086;

type SplitF1 = Split<`${Float1}`, { splitter: '.' }>;
//   ^?

type SplitF2 = Split<`${Float2}`, { splitter: '.' }>;
//   ^?

type SplitF3 = Split<`${Float3}`, { splitter: '.' }>;
// //   ^?

// type SplitFPoint1 = ZeroPaddedNumber<SplitF1[1]>;
// //   ^?

// type SplitFPoint2 = ZeroPaddedNumber<SplitF2[1]>;
// //   ^?

// type SplitFPoint3 = ZeroPaddedNumber<SplitF3[1]>;
// //   ^?

// type IsF1LessThanF3 = LessThan<
//     ExtractLiteral<SplitF1[0]>,
//     ExtractLiteral<SplitF3[0]>
// > extends true
//     ? true
//     : LessThanEqual<
//           ExtractLiteral<SplitF1[0]>,
//           ExtractLiteral<SplitF3[0]>
//       > extends true
//     ? LessThan<SplitFPoint3[0], SplitFPoint1[0]> extends true
//         ? true
//         : LessThanEqual<SplitFPoint3[0], SplitFPoint1[0]> extends true
//         ? LessThan<
//               ExtractLiteral<SplitFPoint1[1]>,
//               ExtractLiteral<SplitFPoint3[1]>
//           >
//         : false
//     : false;

type SplitFPoint1 = Split<SplitF1[1], { splitter: ''; extractLiterals: true }>;
//   ^?

type SplitFPoint2 = Split<SplitF2[1], { splitter: ''; extractLiterals: true }>;
//   ^?

type SplitFPoint3 = Split<SplitF3[1], { splitter: ''; extractLiterals: true }>;
//   ^?

// type IsF1LessThanF3 = LessThan<
//     ExtractLiteral<SplitF1[0]>,
//     ExtractLiteral<SplitF3[0]>
// > extends true
//     ? true
//     : LessThanEqual<
//           ExtractLiteral<SplitF1[0]>,
//           ExtractLiteral<SplitF3[0]>
//       > extends true
//     ? LessThan<SplitFPoint3[0], SplitFPoint1[0]> extends true
//         ? true
//         : LessThanEqual<SplitFPoint3[0], SplitFPoint1[0]> extends true
//         ? LessThan<
//               ExtractLiteral<SplitFPoint1[1]>,
//               ExtractLiteral<SplitFPoint3[1]>
//           >
//         : false
//     : false;

export type LessThanInIdx<
    Arr1 extends number[],
    Arr2 extends number[],
    Acc extends boolean = false
> = Arr1 extends [infer A extends number, ...infer RestA extends number[]]
    ? Arr2 extends [infer B extends number, ...infer RestB extends number[]]
        ? LessThan<A, B> extends true
            ? LessThanInIdx<RestA, RestB, true>
            : LessThanEqual<A, B> extends true
            ? LessThanInIdx<RestA, RestB, Acc>
            : false
        : Acc
    : LessThan<0, Arr2['length']> extends true
    ? true
    : Acc;

// TODO: remove trailing zeros

// Acc['length'] extends Limit
//     ? never
//     : Acc['length'] extends Amount
//     ? Acc
//     : LessThanInIdx<Amount, Limit, [...Acc, Fill], Fill>;

// type Test<Arr1 extends number[], Arr2 extends number[]> = {
//     [Idx in Extract<keyof Arr1, number>]: Arr2[Idx] extends never
//         ? false
//         : LessThan<Arr1[Idx], Arr2[Idx]>;
// };

type B = LessThanInIdx<[4, 2, 1], [4, 2, 4]>;
//   ^?

type IsF1LessThanF3 = LessThan<
    ExtractLiteral<SplitF1[0]>,
    ExtractLiteral<SplitF3[0]>
> extends true
    ? true
    : LessThanEqual<
          ExtractLiteral<SplitF1[0]>,
          ExtractLiteral<SplitF3[0]>
      > extends true
    ? LessThan<SplitFPoint3[0], SplitFPoint1[0]> extends true
        ? true
        : LessThanEqual<SplitFPoint3[0], SplitFPoint1[0]> extends true
        ? LessThanInIdx<SplitFPoint1, SplitFPoint3>
        : false
    : false;
