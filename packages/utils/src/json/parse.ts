import type { ExtractLiteral, ToStr } from "@ylfjuk-core/types";
import type {
	ExtractTupleLiteral,
	ReviverFN,
	StringifiablePrimitive,
	StringifiableTuplePrimitive,
} from "./types/helpers";

type JsonParse = {
	/**
	 * Converts a JavaScript Object Notation (JSON) string into an object.
	 * @param text
	 */
	(text: null, reviver?: never): null;

	/**
	 * Converts a JavaScript Object Notation (JSON) string into an object.
	 * @param text
	 * @param reviver A function that transforms the results. In this case, `null`
	 */
	<R = unknown>(text: null, reviver?: ReviverFN<R, null, "">): R;

	/**
	 * Converts a JavaScript Object Notation (JSON) string into an object.
	 * @param text A string literal of a primitive type
	 */
	<const T extends ToStr<StringifiablePrimitive>>(text: T, reviver?: never): ExtractLiteral<T>;

	/**
	 * Converts a JavaScript Object Notation (JSON) string into an object.
	 * @param text A string literal of a primitive type
	 * @param reviver A function that transforms the results. In this case, the literal value of the string
	 */
	<const T extends ToStr<StringifiablePrimitive>, R = unknown>(
		text: T,
		reviver?: ReviverFN<R, ExtractLiteral<T>, "">,
	): R;

	/**
	 * Converts a JavaScript Object Notation (JSON) string into an object.
	 * @param text A tuple array with a single element that is a primitive type or string literal of a primitive type
	 */
	<const T extends StringifiableTuplePrimitive>(text: T, reviver?: never): ExtractTupleLiteral<T>;

	/**
	 * Converts a JavaScript Object Notation (JSON) string into an object.
	 * @param text A tuple array with a single element that is a primitive type or string literal of a primitive type
	 * @param reviver A function that transforms the results. In this case, the literal value of the element
	 */
	<const T extends StringifiableTuplePrimitive, R = unknown>(
		text: T,
		reviver?: ReviverFN<R, ExtractTupleLiteral<T>, "">,
	): R;

	/**
	 * Converts a JavaScript Object Notation (JSON) string into an object.
	 * @param text A valid JSON string.
	 * @param reviver A function that transforms the results. This function is called for each member of the object.
	 * If a member contains nested objects, the nested objects are transformed before the parent object is.
	 */
	(text: string, reviver?: ReviverFN): unknown;

	/**
	 * Converts a JavaScript Object Notation (JSON) string into an object.
	 * @param text A valid JSON string or `null`.
	 * @param reviver A function that transforms the results. This function is called for each member of the object.
	 * If a member contains nested objects, the nested objects are transformed before the parent object is.
	 *
	 * @returns The parsed value, or `null`.
	 * @throws {SyntaxError} If the string is not a valid JSON.
	 */
	(text: string | null, reviver?: ReviverFN): unknown;
};

/**
 * Parses a JSON string into an object.
 *
 * @note A wrapper for {@link JSON.parse} that provides type safety and overloads for various input types.
 *
 * @since 0.0.9
 * @modified 0.0.10
 */
export const parse = ((text: string | null | StringifiableTuplePrimitive, reviver?: ReviverFN) =>
	// @ts-expect-error: JSON.parse can receive `null`, or a single literal element tuple, but it is not represented by `ts`
	JSON.parse(text, reviver)) as JsonParse;
