import type { Prettify } from './prettify';

/**
 * @since 0.0.10
 */
export type ExactlyOne<T> = Prettify<
    {
        [K in keyof T]-?: Required<Pick<T, K>> & {
            [I in keyof T as I extends K ? never : I]?: never;
        };
    }[keyof T]
>;
