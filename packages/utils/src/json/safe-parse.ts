import type { ExtractLiteral, Result, Success, ToStr } from "@ylfjuk-core/types";
import { parse } from "./parse";
import type {
	ExtractTupleLiteral,
	ReviverFN,
	StringifiablePrimitive,
	StringifiableTuplePrimitive,
} from "./types/helpers";

type JsonSafeParse = {
	/**
	 * Converts a JavaScript Object Notation (JSON) string into an object.
	 * @param text
	 */
	(text: null, reviver?: never): Success<null>;

	/**
	 * Converts a JavaScript Object Notation (JSON) string into an object.
	 * @param text
	 * @param reviver A function that transforms the results. In this case, `null`
	 */
	<R = unknown>(text: null, reviver?: ReviverFN<R, null, "">): Result<R>;

	/**
	 * Converts a JavaScript Object Notation (JSON) string into an object.
	 * @param text A string literal of a primitive type
	 */
	<const T extends ToStr<StringifiablePrimitive>>(
		text: T,
		reviver?: never,
	): Success<ExtractLiteral<T>>;

	/**
	 * Converts a JavaScript Object Notation (JSON) string into an object.
	 * @param text A string literal of a primitive type
	 * @param reviver A function that transforms the results. In this case, the literal value of the string
	 */
	<const T extends ToStr<StringifiablePrimitive>, R = unknown>(
		text: T,
		reviver?: ReviverFN<R, ExtractLiteral<T>, "">,
	): Result<R>;

	/**
	 * Converts a JavaScript Object Notation (JSON) string into an object.
	 * @param text A tuple array with a single element that is a primitive type or string literal of a primitive type
	 */
	<const T extends StringifiableTuplePrimitive>(
		text: T,
		reviver?: never,
	): Success<ExtractTupleLiteral<T>>;

	/**
	 * Converts a JavaScript Object Notation (JSON) string into an object.
	 * @param text A tuple array with a single element that is a primitive type or string literal of a primitive type
	 * @param reviver A function that transforms the results. In this case, the literal value of the element
	 */
	<const T extends StringifiableTuplePrimitive, R = unknown>(
		text: T,
		reviver?: ReviverFN<R, ExtractTupleLiteral<T>, "">,
	): Result<R>;

	/**
	 * Converts a JavaScript Object Notation (JSON) string into an object.
	 * @param text A valid JSON string.
	 * @param reviver A function that transforms the results. This function is called for each member of the object.
	 * If a member contains nested objects, the nested objects are transformed before the parent object is.
	 */
	(text: string, reviver?: ReviverFN): Result<unknown, SyntaxError>;

	/**
	 * Converts a JavaScript Object Notation (JSON) string into an object.
	 * @param text A valid JSON string or `null`.
	 * @param reviver A function that transforms the results. This function is called for each member of the object.
	 * If a member contains nested objects, the nested objects are transformed before the parent object is.
	 *
	 * @returns The parsed value, or `null`.
	 * @throws {SyntaxError} If the string is not a valid JSON.
	 */
	(text: string | null, reviver?: ReviverFN): Result<unknown, Error>;
};

/**
 * Safely parses a JSON string, returning a result object that indicates success or failure.
 *
 * @see {@link parse}
 *
 * @since 0.0.9
 * @modified 0.0.10
 */
export const safeParse = ((text: string | null, reviver?: ReviverFN) => {
	try {
		return {
			success: true,
			data: parse(text, reviver),
		};
	} catch (error) {
		return {
			success: false,
			reason: error,
		};
	}
}) as JsonSafeParse;
