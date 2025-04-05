// import type { NonOptional } from './non-optional';
// import type { Prettify } from './prettify';

// type _Builder<T extends object> = NonOptionalDeep<NonOptional<T>>;

// export type NonOptionalDeep<T extends object> = Prettify<{
//     [K in keyof NonOptional<T>]: NonOptional<T>[K] extends object
//         ? NonOptionalDeep<Exclude<NonOptional<T>[K], undefined>>
//         : T[K];
// }>;

// type Test = NonOptionalDeep<{
//     bob?: 'bob';
//     bert: { name: 'bert'; both?: 'berta'; both2?: boolean | undefined };
//     berta?: { is: true } | undefined;
//     test?: { test?: 2; tester: 3 };
// }>;
