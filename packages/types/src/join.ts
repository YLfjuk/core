import type { Stringifiable } from "./stringifiable.js";
import type { ToStr } from "./to-str.js";

type Settings = { separator: string };
type DefaultSettings = { separator: "" };

/**
 * Joins stringifiable elements.
 *
 * @see {@link Stringifiable}
 * @see {@link ToStr}
 *
 * @since 0.0.14
 */
export type Join<
	T extends Stringifiable[],
	Options extends Settings = DefaultSettings,
> = T extends [infer S extends Stringifiable, ...infer Rest extends Stringifiable[]]
	? `${ToStr<S>}${Join<Rest, Options> extends infer U extends string
			? U extends ""
				? ""
				: `${Options["separator"]}${U}`
			: ""}`
	: "";
