import type { Suggest, UnknownArray } from "@ylfjuk-core/types";

/**
 * Checks if an array includes a specific element.
 *
 * @remarks Wraps {@link Array.prototype.includes} while accepting values outside the array's inferred element type.
 *
 * @since 0.0.8
 */
export const includes = <const Arr extends UnknownArray, const El extends Suggest<Arr[number]>>(
	arr: Arr,
	el: El,
): boolean => arr.includes(el);
