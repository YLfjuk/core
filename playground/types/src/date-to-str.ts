import type { Replace } from './replace';

export type DateToStr<T> = Replace<T, Date, string>;

// region Tests

type Test2_4 = DateToStr<{ bob: Date; bert: { berta: Date } }>;
//   ^?
