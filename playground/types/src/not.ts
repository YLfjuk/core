export type Not<A, B = true> = A extends B ? false : true;
