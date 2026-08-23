import type { Stringifiable } from "./stringifiable.js";

/**
 * Converts stringifiable values to strings.
 *
 * @see {@link Stringifiable}
 *
 * @since 0.0.14
 */
export type ToStr<T extends Stringifiable> = T extends object
	? ReturnType<T["toString"]>
	: T extends Exclude<Stringifiable, object>
		? `${T}`
		: never;
