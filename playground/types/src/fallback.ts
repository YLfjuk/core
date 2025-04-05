// import type { NonOptional, PartialDeep } from '@ylfjuk-core/types';
// import type { PickOptionalDeep } from './pick-optional-deep';

// // TODO: add deep support
// export type Fallback<
//     T,
//     Value extends T,
//     Fb extends PartialDeep<PickOptionalDeep<T>>
// > = {
//     [K in keyof NonOptional<T>]: Pick<Value, K> extends Pick<
//         NonOptional<Value>,
//         K
//     >
//         ? Fallback<T[K], Value[K], Fb[K]>
//         : never;
// };

// // {
// //     [K in keyof NonOptional<T>]: Value extends
// //         [_K in K]: Required<Value>[_K];
// //         ? Value[K]
// //         : K extends keyof Fallback
// //         ? Fallback[K]
// //         : Fallback;
// // };

// // region Tests
// type Type = { bob: number; bert?: string | undefined };
// type ExtendedType = { bob: number; bert?: string | undefined; berta?: boolean };

// type Test12 = Fallback<
//     //^?
//     ExtendedType,
//     { bob: 4; bert: 'bob'; berta: true },
//     { bert: 'bert'; berta: false }
// >;

// type Test13 = Fallback<
//     //^?
//     ExtendedType,
//     { bob: 4; bert: 'bob' },
//     { bert: 'bert'; berta: false }
// >;

// type Test14 = Fallback<
//     //^?
//     ExtendedType,
//     { bob: 4; berta: true },
//     { bert: 'bert'; berta: false }
// >;

// type Test15 = Fallback<
//     //^?
//     ExtendedType,
//     { bob: 4; bert: undefined },
//     { bert: 'bert'; berta: false }
// >;
