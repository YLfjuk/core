import type { Box } from './box';

/**
 * @see {@link Box}
 *
 * @alternative
 * type Equal<A, B> = (<G>() => G extends A ? 1 : 2) extends (<G>() => G extends B ? 1 : 2) ? true : false
 *
 * @previous Equal {@v 0.0.12}
 *
 * @since 0.0.12
 * @modified 0.0.14 {@breaking 💥}
 */
export type Equals<A, B> = Box<A> extends Box<B>
    ? Box<B> extends Box<A>
        ? true
        : false
    : false;
