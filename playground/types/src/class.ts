'use new';

import type { UnknownArray } from '@ylfjuk-core/types';

export type Class<
    T = unknown,
    Args extends UnknownArray = UnknownArray
> = abstract new (...args: Args) => T;

type Test = typeof Pixel extends Class ? true : false;
//   ^?

class Pixel {}
