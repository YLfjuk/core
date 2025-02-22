import type { Extends } from './extends';

export type And<A, B, C = true> = Extends<A, C> extends true
    ? Extends<B, C>
    : false;
