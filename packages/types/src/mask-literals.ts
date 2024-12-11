import type { InverseExtract } from './inverse-extract';
import type { Primitive } from './primitive';

export type MaskLiterals<T> = {
    [K in Primitive as `${Primitive}`]: InverseExtract<
        T,
        K extends boolean ? boolean : K
    >;
}[string];
