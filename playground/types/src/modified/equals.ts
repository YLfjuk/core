'use modified'; // Usage of {@link Extends}
'use rename'; // Equal -> Equals

import type { Extends } from '../extends';

/**
 * @see {@link Extends}
 *
 * @see
 * type Equals<A, B> = (<G>() => G extends A ? 1 : 2) extends (<G>() => G extends B ? 1 : 2) ? true : false
 *
 * @previous Equal {@v 0.0.12}
 *
 * @since 0.0.12
 */
export type Equals<A, B> = Extends<A, B> extends true ? Extends<B, A> : false;

type T1 = Equals<true, true>;
//   ^?
