import { describe, expectTypeOf, it } from "vitest";

import type { UnionToTuple } from "../src/union-to-tuple";

describe("UnionToTuple", () => {
	it("should include each union member once in a tuple", () => {
		type Members = 1 | 2 | 3 | 4 | 5 | "bob" | 6;
		type Actual = UnionToTuple<Members>;

		// Union ordering is not guaranteed by TypeScript.
		expectTypeOf<Actual[number]>().toEqualTypeOf<Members>();
		expectTypeOf<Actual["length"]>().toEqualTypeOf<7>();
	});

	it("should convert never into an empty tuple", () => {
		expectTypeOf<UnionToTuple<never>>().toEqualTypeOf<[]>();
	});

	it("should convert a single member into a one-element tuple", () => {
		expectTypeOf<UnionToTuple<"bob">>().toEqualTypeOf<["bob"]>();
	});
});
