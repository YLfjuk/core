import type { StrictOmit } from '@ylfjuk-core/types';

export type Optional<T, K extends keyof T> = StrictOmit<T, K> &
    Partial<Pick<T, K>>;
