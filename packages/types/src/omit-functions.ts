import type { FN } from './fn';
import type { OmitBy } from './omit-by';

/**
 * @description Omits the set of properties that are functions
 *
 * @see {@link OmitBy}
 *
 * @since 0.0.14
 */
export type OmitFunctions<T> = OmitBy<T, FN>;
