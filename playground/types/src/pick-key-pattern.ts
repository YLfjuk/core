import type { Suggest } from '@ylfjuk-core/types';

/**
 * TODO: find a way to restrict to restrict to
 * {@link PropertyKey}
 */
export type PickKeyPattern<T, P extends Suggest<keyof T>> = {
    [K in Extract<keyof T, P>]: T[K];
};

// #region Tests

declare const sym: unique symbol;

type Obj = {
    bob: 'bob';
    bert: 'bert';
    bobbert: 'bobert';
    prefix_kdhgfed: 'dgdg';
    dhshH_suffix: 'dhdfhg';
    [sym]: 'egdgd';
    11: 'sgsdg';
};

type Test = PickKeyPattern<Obj, 11>;
//   ^?
