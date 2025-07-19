import type { Suggest, UnknownArray } from "@ylfjuk-core/types";

/**
 * Checks if an array includes a specific element.
 *
 * @note A wrapper around {@link Array.prototype.includes} that allows to check against any type
 *
 * @since 0.0.8
 * @modified 0.0.10
 */
export const includes = <const Arr extends UnknownArray, const El extends Suggest<Arr[number]>>(
	arr: Arr,
	el: El,
): boolean => arr.includes(el);
