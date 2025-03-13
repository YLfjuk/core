'use ready';
'use new';

import type { FN } from '../../../packages/types/src/fn';
import type { PickBy } from '../../../packages/types/src/pick-by';
import type { StrictOmit } from '../../../packages/types/src/strict-omit';

export type OmitFunctions<T> = StrictOmit<T, keyof PickBy<T, FN>>;
