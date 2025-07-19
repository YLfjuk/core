import { describe, expectTypeOf, it } from "vitest";
import type { LastOfUnion } from "../src/last-of-union";

describe("LastOfUnion", () => {
	it("should extract the last element in a union", () => {
		type Actual = LastOfUnion<1 | 2 | 3 | 4 | 5 | "bob" | 6>;
		type Expected = 6;

		expectTypeOf<Actual>().toEqualTypeOf<Expected>();
	});
});
