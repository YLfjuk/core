import type { ValueOf } from '@ylfjuk-core/types';

export type Entry<T extends object> = ValueOf<{
    [K in keyof T]: [K, T[K]];
}>;

export const entriesOf = <const T extends object>(obj: T) =>
    Object.entries(obj) as Entry<T>[];
// #region Tests
const obj = { bob: 'bw33', bert: 3545 };
const entries = entriesOf(obj);

// const test = entries.map((entry) => {
//     obj[entry[0]] = entry[1];
// });
