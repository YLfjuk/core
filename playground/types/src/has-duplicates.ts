export type HasDuplicates<T extends readonly unknown[]> = T extends readonly [
    infer First,
    ...infer Rest
]
    ? First extends Rest[number]
        ? true
        : HasDuplicates<Rest>
    : false;

// region Tests
type NoDuplicates1 = HasDuplicates<[string, number, boolean]>;
//   ^?

type NoDuplicates2 = HasDuplicates<[string, number, string]>;
//   ^?

type NoDuplicates3 = HasDuplicates<[]>;
//   ^?

type NoDuplicates4 = HasDuplicates<[string]>;
//   ^?

const test = [1, 2, 3, 2] as const;

type NoDuplicates5 = HasDuplicates<typeof test>;
//   ^?
