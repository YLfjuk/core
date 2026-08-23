import type { Maybe } from "./maybe.js";
import type { Suggest } from "./suggest.js";

/**
 * Suggests `T` while allowing any value.
 *
 * @see {@link Suggest}
 * @see {@link Maybe}
 * @see {@link https://x.com/colinhacks/status/1891069007299522877?s=19}
 *
 * @remarks An equivalent definition is:
 * type Whatever<T> = T | {} | null | undefined;
 */
export type Whatever<T> = Maybe<Suggest<T>>;
