import type { NonOptional } from '@ylfjuk-core/types';

type NonPartial = NonOptional<{
    //^?
    bob: 'bob';
    bert?: string | undefined;
    berta?: boolean;
}>;

const test: NonPartial = {
    bob: 'bob',
    bert: 'bert',
    berta: undefined, // should not be accepted
};
