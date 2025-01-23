import type { Box } from './box';

/**
 * @alternative
 * type Equal<A, B> = (<G>() => G extends A ? 1 : 2) extends (<G>() => G extends B ? 1 : 2) ? true : false
 */
export type Equal<A, B> = Box<A> extends Box<B>
    ? Box<B> extends Box<A>
        ? true
        : false
    : false;
