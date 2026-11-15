/**
 * Expands one level of a type into a readable shape, distributing over unions.
 * Nested property types and optional/readonly modifiers are preserved.
 * Use {@link PrettifyDeep} or {@link Prettify.Deep} for recursive expansion.
 *
 * Based on Matt Pocock's {@link https://www.totaltypescript.com/concepts/the-prettify-helper | Prettify helper}.
 *
 * @since 0.0.1
 */
export type Prettify<T> = {
	[K in keyof T]: T[K];
} & {};

/**
 * Recursively expands object properties and array/tuple elements.
 * Preserves primitives, Date, functions and constructors unchanged, including
 * their attached properties. Map/Set and weak/readonly collections are leaves;
 * their keys and values are not expanded. Other objects are mapped structurally,
 * so this is not an identity-preserving transform for arbitrary class instances.
 * Optional and readonly modifiers are preserved.
 *
 * @see {@link Prettify} for shallow expansion.
 * @since @next
 */
export type PrettifyDeep<T> = T extends
	| Date
	| ((...args: any[]) => any)
	| (abstract new (...args: any[]) => any)
	| ReadonlyMap<unknown, unknown>
	| ReadonlySet<unknown>
	| WeakMap<object, unknown>
	| WeakSet<object>
	? T
	: { [K in keyof T]: PrettifyDeep<T[K]> };

/** @since @next */
export declare namespace Prettify {
	/** Recursive expansion. @since @next */
	export type Deep<T> = PrettifyDeep<T>;
}
