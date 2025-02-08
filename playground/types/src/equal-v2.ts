import type { Extends } from './extends';

/**
 * @see {@link Extends}
 *
 * @alternative
 * type Equal<A, B> = (<G>() => G extends A ? 1 : 2) extends (<G>() => G extends B ? 1 : 2) ? true : false
 *
 * @since 0.0.12
 * @modified 0.0.x
 */
export type Equal<A, B> = Extends<A, B> extends true ? Extends<B, A> : false;

type Test<A, B> = Extends<A, B> & Extends<B, A>;

type T1 = Test<true, true>;
//   ^?
