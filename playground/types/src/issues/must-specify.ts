type BuildStr<T extends string[]> = T extends [
    infer S extends string,
    ...infer Rest extends string[]
]
    ? `${S}${BuildStr<Rest>}`
    : never;

//! must add extends to infer...
