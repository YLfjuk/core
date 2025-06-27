import type { FN, ToStr } from "@ylfjuk-core/types";
import type { ReplacerFN, StringifiablePrimitive } from "./types/helpers";

type JsonStringify = {
	/**
	 * Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
	 * @param value A JavaScript value (`undefined`, `symbol`, or a function)
	 * @param replacer Is not used in this case, so it is set to `never`.
	 * @param spaceIs Is not used in this case, so it is set to `never`.
	 */
	(value: undefined | symbol | FN, replacer?: never, space?: never): undefined;

	/**
	 * Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
	 * @param value A JavaScript value (`undefined`, `symbol`, or a function)
	 * @param replacer A function that transforms the results.
	 * @param space Adds indentation, white space, and line break characters to the return-value JSON text to make it easier to read.
	 */
	(
		value: undefined | symbol | FN,
		replacer?: ReplacerFN,
		space?: string | number,
	): string | undefined;

	/**
	 * Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
	 * @param value A JavaScript value, usually an object or array, to be converted.
	 * @param replacer Is not used in this case, so it is set to `never`.
	 * @param spaceIs Is not used in this case, so it is set to `never`.
	 */
	<T extends StringifiablePrimitive | string>(value: T, replacer?: never, space?: never): ToStr<T>;

	/**
	 * Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
	 * @param value A JavaScript value, usually an object or array, to be converted.
	 * @param replacer A function that transforms the results.
	 * @param space Adds indentation, white space, and line break characters to the return-value JSON text to make it easier to read.
	 */
	<T extends StringifiablePrimitive | string>(
		value: T,
		replacer?: ReplacerFN,
		space?: string | number,
	): ToStr<T> | undefined;

	/**
	 * Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
	 * @param value A JavaScript value, usually an object or array, to be converted.
	 * @param replacer Is not used in this case, so it is set to `never`.
	 * @param spaceIs Is not used in this case, so it is set to `never`.
	 */
	(value: object, replacer?: never, space?: never): string;

	/**
	 * Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
	 * @param value A JavaScript value, usually an object or array, to be converted.
	 * @param replacer A function that transforms the results.
	 * @param space Adds indentation, white space, and line break characters to the return-value JSON text to make it easier to read.
	 */
	(value: object, replacer?: ReplacerFN, space?: string | number): string | undefined;

	/**
	 * Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
	 * @param value A JavaScript value, usually an object or array, to be converted.
	 * @param replacer A function that transforms the results.
	 * @param space Adds indentation, white space, and line break characters to the return-value JSON text to make it easier to read.
	 */
	(value: unknown, replacer?: ReplacerFN, space?: string | number): string | undefined;

	/**
	 * Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
	 * @param value A JavaScript value (`undefined`, `symbol`, or a function)
	 * @param replacer An array of strings and numbers that acts as an approved list for selecting the object properties that will be stringified.
	 * @param space Adds indentation, white space, and line break characters to the return-value JSON text to make it easier to read.
	 */
	(
		value: undefined | symbol | FN,
		replacer?: (number | string)[] | null,
		space?: string | number,
	): undefined;

	/**
	 * Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
	 * @param value A JavaScript value, usually an object or array, to be converted.
	 * @param replacer An array of strings and numbers that acts as an approved list for selecting the object properties that will be stringified.
	 * @param space Adds indentation, white space, and line break characters to the return-value JSON text to make it easier to read.
	 */
	<T extends StringifiablePrimitive | string>(
		value: T,
		replacer?: (number | string)[] | null,
		space?: string | number,
	): ToStr<T>;

	/**
	 * Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
	 * @param value A JavaScript value, usually an object or array, to be converted.
	 * @param replacer An array of strings and numbers that acts as an approved list for selecting the object properties that will be stringified.
	 * @param space Adds indentation, white space, and line break characters to the return-value JSON text to make it easier to read.
	 */
	(value: object, replacer?: (number | string)[] | null, space?: string | number): string;

	/**
	 * Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
	 * @param value A JavaScript value, usually an object or array, to be converted.
	 * @param replacer An array of strings and numbers that acts as an approved list for selecting the object properties that will be stringified.
	 * @param space Adds indentation, white space, and line break characters to the return-value JSON text to make it easier to read.
	 */
	(value: unknown, replacer?: (number | string)[] | null, space?: string | number): string;

	/**
	 * Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
	 * @param value A JavaScript value, usually an object or array, to be converted.
	 * @param replacer An array of strings and numbers that acts as an approved list for selecting the object properties that will be stringified.
	 * @param space Adds indentation, white space, and line break characters to the return-value JSON text to make it easier to read.
	 */
	(
		value: unknown,
		replacer?: (number | string)[] | null,
		space?: string | number,
	): string | undefined;
};

/**
 * Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
 *
 * @note A wrapper for {@link JSON.stringify} that provides type safety and overloads for various input types.
 *
 * @since 0.0.9
 */
export const jsonStringify = ((value: unknown) => JSON.stringify(value)) as JsonStringify;
