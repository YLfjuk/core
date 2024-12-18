export type Abs<N extends number> = `${N}` extends `-${infer P extends number}`
    ? P
    : N;
