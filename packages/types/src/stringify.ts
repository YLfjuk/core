import type { Stringifiable } from './stringifiable';

/**
 * @description Stringifies values that can be stringified
 *
 * @see {@link Stringifiable}
 *
 * @since 0.0.14
 */
export type Stringify<T extends Stringifiable> = T extends object
    ? ReturnType<T['toString']>
    : T extends Exclude<Stringifiable, object>
    ? `${T}`
    : never;
