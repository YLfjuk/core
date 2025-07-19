import { describe, expectTypeOf, it } from "vitest";
import type { UnionToTuple } from "../src/union-to-tuple";

describe("UnionToTuple", () => {
	it("should convert a union into an ordered tuple", () => {
		type Actual = UnionToTuple<1 | 2 | 3 | 4 | 5 | "bob" | 6>;
		type Expected = [1, 2, 3, 4, 5, "bob", 6];

		expectTypeOf<Actual>().toEqualTypeOf<Expected>();
	});
});
