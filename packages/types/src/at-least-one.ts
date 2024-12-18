import type { Prettify } from './prettify';

export type AtLeastOne<T> = Prettify<
    {
        [K in keyof T]-?: Partial<T> & Required<Pick<T, K>>;
    }[keyof T]
>;
