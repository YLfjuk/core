// import type { ValueOf } from '@ylfjuk-core/types';
// import { entriesOf, type Entry } from './entries-of';

// type EntryMapper<T extends object, R = unknown> = ValueOf<{
//     [E in Entry<T> as E[0]]: (key: E[0], val: E[1]) => R;
// }>;
// export const mapEntries = <const T extends object, M extends EntryMapper<NoInfer<T>>(
//     obj: T,
//     mapper: M
// ) => entriesOf(obj).map(([key, val]) => mapper(key, val));

// // #region Tests
// const obj = { bob: 'bw33', bert: 3545 };
// const entries = entriesOf(obj);
// const test = entries.map((entry) => {
//     obj[entry[0]] = entry[1];
// });

// TODO: achieve this
// type Test = EntryMapper<typeof obj>

// type EntryMapper<{a: 1, b: 2}, R> = {
//     (key: 'a', val: 1): R
//     (key: 'b', val: 2): R
// }
