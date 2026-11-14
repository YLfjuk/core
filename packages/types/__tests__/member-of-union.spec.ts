import { describe, expectTypeOf, it } from "vitest";

import type { IsDisjointUnion, MemberOfUnion } from "@ylfjuk-core/types";

describe("MemberOfUnion", () => {
	it("selects exactly one member without assuming union order", () => {
		type Input = 1 | 2 | 3 | "bob";
		type Actual = MemberOfUnion<Input>;

		expectTypeOf<Actual>().not.toBeNever();
		expectTypeOf<Actual>().toExtend<Input>();
		expectTypeOf<IsDisjointUnion<Actual>>().toEqualTypeOf<false>();
	});

	it("preserves a singleton", () => {
		expectTypeOf<MemberOfUnion<"bob">>().toEqualTypeOf<"bob">();
	});

	it("returns never for an empty union", () => {
		expectTypeOf<MemberOfUnion<never>>().toBeNever();
	});

	it("selects one boolean literal", () => {
		type Actual = MemberOfUnion<boolean>;

		expectTypeOf<Actual>().not.toBeNever();
		expectTypeOf<IsDisjointUnion<Actual>>().toEqualTypeOf<false>();
	});

	it("respects a union collapsed by the compiler", () => {
		expectTypeOf<MemberOfUnion<string | "bob">>().toEqualTypeOf<string>();
	});
});
