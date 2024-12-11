import type { UnionToIntersection } from './union-to-intersection';

export type IsDisjointUnion<T> = UnionToIntersection<T> extends never
    ? true
    : false;
