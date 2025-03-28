import type { FN } from './fn';
import type { PickBy } from './pick-by';
import type { StrictOmit } from './strict-omit';

/**
 * @description Omits the set of properties that are functions
 *
 * @see {@link PickBy}
 *
 * @since 0.0.14
 */
export type OmitFunctions<T> = StrictOmit<T, keyof PickBy<T, FN>>;
