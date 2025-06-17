import type { Falsy } from '@ylfjuk-core/types';

/**
 * Type guard that checks if a value is truthy.
 *
 * @note A wrapper around `Boolean` that narrows the type to exclude falsy values.
 *
 * @since 0.0.8
 */
export const bool = <T>(value: T): value is Exclude<T, Falsy> => Boolean(value);
