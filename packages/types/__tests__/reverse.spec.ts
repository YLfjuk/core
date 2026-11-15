import { describe, expectTypeOf, it } from "vitest";

import type { Reverse } from "../src/reverse";

describe("Reverses an array", () => {
	it("should reverse a tuple/array", () => {
		type Actual = Reverse<[1, 2, 3]>;

		type Expected = [3, 2, 1];

		expectTypeOf<Actual>().toEqualTypeOf<Expected>();
	});

	it("should preserve a generic array", () => {
		type Actual = Reverse<unknown[]>;

		type Expected = unknown[];

		expectTypeOf<Actual>().toEqualTypeOf<Expected>();
	});
});

it("accepts readonly tuples and preserves existing fallback boundaries", () => {
	expectTypeOf<Reverse<readonly [1, 2]>>().toEqualTypeOf<[2, 1]>();
	expectTypeOf<Reverse<[]>>().toEqualTypeOf<[]>();
	expectTypeOf<Reverse<readonly []>>().toEqualTypeOf<readonly []>();
	expectTypeOf<Reverse<readonly number[]>>().toEqualTypeOf<readonly number[]>();
	expectTypeOf<Reverse<[1?]>>().toEqualTypeOf<[1?]>();
	expectTypeOf<Reverse<[1, 2?]>>().toEqualTypeOf<[]>();
	expectTypeOf<Reverse<[1, ...number[]]>>().toEqualTypeOf<[]>();
	expectTypeOf<Reverse<[...number[], 1]>>().toEqualTypeOf<[1, ...number[]]>();
	expectTypeOf<Reverse<readonly [1, 2] | [3, 4]>>().toEqualTypeOf<[2, 1] | [4, 3]>();
	// @ts-expect-error input must be an array
	expectTypeOf<Reverse<number>>().toEqualTypeOf<[]>();
});
