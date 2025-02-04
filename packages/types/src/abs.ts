/**
 * @returns The absolute value of a numeric value type
 *
 * @since 0.0.10
 */
export type Abs<N extends number> = `${N}` extends `-${infer P extends number}`
    ? P
    : N;
