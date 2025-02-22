export type Not<A, B = true> = A extends B ? false : true;

// region tests
type Test = Not<never, never>; //? never
//   ^?

type NeverTester = never extends never ? true : false;
//   ^?
