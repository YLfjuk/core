import type { UnionToIntersection } from './union-to-intersection';

/**
 * @see {@link UnionToIntersection}
 *
 * @since 0.0.7
 */
export type IsDisjointUnion<T> = UnionToIntersection<T> extends never
    ? true
    : false;
