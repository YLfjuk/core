import type { Falsy } from '../../types/src/falsy';

export const bool = <T>(value: T): value is Exclude<T, Falsy> => Boolean(value);
