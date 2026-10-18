import { describe, expectTypeOf, it } from "vitest";

import type { IsDisjointUnion } from "../src/is-disjoint-union";
import type { LastOfUnion } from "../src/last-of-union";

describe("LastOfUnion", () => {
	it("should extract one member from a union", () => {
		type Members = 1 | 2 | 3 | 4 | 5 | "bob" | 6;
		type Actual = LastOfUnion<Members>;

		// Union ordering is not guaranteed by TypeScript.
		expectTypeOf<Actual>().toExtend<Members>();
		expectTypeOf<Actual>().not.toBeNever();
		expectTypeOf<IsDisjointUnion<Actual>>().toEqualTypeOf<false>();
	});

	it("should preserve a single member", () => {
		expectTypeOf<LastOfUnion<"bob">>().toEqualTypeOf<"bob">();
	});

	it("should return never for an empty union", () => {
		expectTypeOf<LastOfUnion<never>>().toBeNever();
	});
});
