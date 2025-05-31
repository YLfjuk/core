import type { Extends } from '@ylfjuk-core/types';

export type And<A, B, C = true> = Extends<A, C> extends true
    ? Extends<B, C>
    : false;
