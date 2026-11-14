import type { FN, Maybe } from "@ylfjuk-core/types";

/**
 *
 * @param options - an array of option to toggle between
 * @param currentOption - the current option; omit to select the first option
 * @param isEqual - A function that returns if two given elements should be treated as equal; defaults to Object.is
 *
 * Toggles between elements in an array.
 * @remarks Duplicate options are not supported. Explicit undefined is a current option,
 * not omission. Object.is matches NaN and distinguishes +0 from -0.
 *
 * @example
 * const [next,] = toggle([]) // [null, -1]
 * const [next,] = toggle([true, false]) // [true, 0]
 * const [next,] = toggle([true, false], true) // [false, 1]
 * const [next,] = toggle<number>([1, 2], 3) // [1, 0]
 * const [next,] = toggle([{ id: 1 }, { id: 2 }], { id: 2 }, (a, b) => a.id === b.id) // [{ id: 1 }, 0]
 *
 * @since 0.0.6
 */
export const toggle = <const T>(
	options: ReadonlyArray<T>,
	...args: [] | [currentOption: NoInfer<T>, isEqual?: FN<boolean, [a: T, b: T]>]
): [Maybe<T>, number] => {
	if (!options.length) {
		// oxlint-disable-next-line no-console -- preserves the existing diagnostic output.
		console.warn("Array has no options to toggle");
		return [null, -1];
	}

	if (!args.length) return [options[0], 0];

	const [currentOption, isEqual = Object.is] = args;

	const currentIdx = options.findIndex((option) => isEqual(option, currentOption));

	if (currentIdx === -1) {
		// oxlint-disable-next-line no-console -- preserves the existing diagnostic output.
		console.warn(
			"`currentOption` was not found in `options` array. defaulting to the first option",
		);
	}

	const nextIdx = (currentIdx + 1) % options.length;
	const nextOption = options[nextIdx];

	return [nextOption, nextIdx];
};
