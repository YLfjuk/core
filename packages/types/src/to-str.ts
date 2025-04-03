import type { Stringifiable } from './stringifiable';

/**
 * @description Stringifies values that can be  turned into strings
 *
 * @see {@link Stringifiable}
 *
 * @since 0.0.14
 */
export type ToStr<T extends Stringifiable> = T extends object
    ? ReturnType<T['toString']>
    : T extends Exclude<Stringifiable, object>
    ? `${T}`
    : never;
