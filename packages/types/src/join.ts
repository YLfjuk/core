import type { Stringifiable } from './stringifiable';
import type { ToStr } from './to-str';

type Settings = { separator: string };
type DefaultSettings = { separator: '' };

/**
 * @description Joins together stringifiable elements
 *
 * @see {@link Stringifiable}
 * @see {@link Stringify}
 *
 * @since 0.0.14
 */
export type Join<
    T extends Stringifiable[],
    Options extends Settings = DefaultSettings
> = T extends [
    infer S extends Stringifiable,
    ...infer Rest extends Stringifiable[]
]
    ? `${ToStr<S>}${Join<Rest, Options> extends infer U extends string
          ? U extends ''
              ? ''
              : `${Options['separator']}${U}`
          : ''}`
    : '';
