import type { FN } from "./fn.js";
import type { OmitBy } from "./omit-by.js";

/**
 * Omits properties whose values are functions.
 *
 * @see {@link OmitBy}
 *
 * @since 0.0.14
 */
export type OmitFunctions<T> = OmitBy<T, FN>;
