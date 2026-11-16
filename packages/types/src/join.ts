import type { Stringifiable } from "./stringifiable.js";
import type { ToStr } from "./to-str.js";

type Settings = { separator: string };
type DefaultSettings = { separator: "" };

/**
 * Joins stringifiable elements.
 *
 * @remarks Empty elements retain their separators. Broad arrays, variadic tuples, and optional
 * tuples fall back to `string`. Readonly tuples are accepted.
 *
 * @see {@link Stringifiable}
 * @see {@link ToStr}
 *
 * @since 0.0.14
 */
export type Join<
	T extends readonly Stringifiable[],
	Options extends Settings = DefaultSettings,
> = T extends readonly []
	? ""
	: T extends Required<T>
		? number extends T["length"]
			? string
			: T extends readonly [
						infer S extends Stringifiable,
						...infer Rest extends Stringifiable[],
				  ]
				? `${ToStr<S>}${Rest extends [] ? "" : `${Options["separator"]}${Join<Rest, Options>}`}`
				: string
		: string;
