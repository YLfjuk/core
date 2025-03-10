/**
 * @type {MaskLiterals} - turns literals into the primitive | 'bob' -> string | 5 -> number | etc...
 * @type {Primitive} - string | number | bigint | boolean | symbol | null | undefine
 */

import type { MaskLiterals, Primitive } from '@ylfjuk-core/types';

// Option 1
type Settings =
    | {
          allowUnknown: true;
          allowed?: unknown;
      }
    | {
          allowUnknown: false;
          allowed?: Primitive;
      };

type DefaultSettings<T extends Primitive> = {
    allowUnknown: true;
    allowed: MaskLiterals<T>;
};

type GetAllowed<
    Guard extends Primitive,
    Options extends Settings
> = Options['allowUnknown'] extends true
    ? unknown
    : Options extends { allowed: Primitive }
    ? Options['allowed']
    : MaskLiterals<Guard>;

export const guard = <
    const Guard extends Primitive & GetAllowed<Guard, Options>,
    Options extends Settings = DefaultSettings<Guard>
>(
    check: Guard
) => {
    return (value: GetAllowed<Guard, Options>): value is Guard =>
        value === check;
};

const isBob = guard<'bob', { allowUnknown: false; allowed: 'bob' | 'bert' }>(
    'bob'
);

const isBob3_1 = guard(undefined);
