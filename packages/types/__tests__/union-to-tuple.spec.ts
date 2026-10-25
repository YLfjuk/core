import { describe, expectTypeOf, it } from "vitest";

import type { UnionToTuple } from "../src/union-to-tuple.js";

describe("UnionToTuple", () => {
	it("preserves every member and the tuple length without assuming order", () => {
		type Input = 1 | 2 | 3 | 4 | 5 | "bob" | 6;
		type Actual = UnionToTuple<Input>;

		expectTypeOf<Actual[number]>().toEqualTypeOf<Input>();
		expectTypeOf<Actual["length"]>().toEqualTypeOf<7>();
	});

	it("preserves singleton and empty unions", () => {
		expectTypeOf<UnionToTuple<"bob">>().toEqualTypeOf<["bob"]>();
		expectTypeOf<UnionToTuple<never>>().toEqualTypeOf<[]>();
	});
});
