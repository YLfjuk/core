import type { Prettify } from './prettify';

/**
 * @since 0.0.10
 */
export type AtLeastOne<T> = Prettify<
    {
        [K in keyof T]-?: Partial<T> & Required<Pick<T, K>>;
    }[keyof T]
>;
