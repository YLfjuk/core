import type { Maybe } from './maybe';
import type { Suggest } from './suggest';

/**
 * @description
 * Suggests the provided type {@link T}, but allows any value
 *
 * @see {@link Suggest}
 * @see {@link Maybe}
 * @see {@link https://x.com/colinhacks/status/1891069007299522877?s=19}
 *
 * @alternative
 * type Whatever<T> = T | {} | null | undefined;
 */
export type Whatever<T> = Maybe<Suggest<T>>;
