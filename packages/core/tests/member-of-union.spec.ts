import { describe, expectTypeOf, it } from "vitest";

import type { MemberOfUnion as TypesMemberOfUnion } from "@ylfjuk-core/types";
import type { LastOfUnion, MemberOfUnion, UnionToTuple } from "@ylfjuk/core";

describe("union type exports", () => {
	it("exposes the preferred name and compatibility alias through core", () => {
		type Input = 1 | 2 | 3 | "bob";

		expectTypeOf<MemberOfUnion<Input>>().toEqualTypeOf<TypesMemberOfUnion<Input>>();
		expectTypeOf<LastOfUnion<Input>>().toEqualTypeOf<MemberOfUnion<Input>>();
		expectTypeOf<MemberOfUnion<"bob">>().toEqualTypeOf<"bob">();
		expectTypeOf<MemberOfUnion<never>>().toBeNever();
		expectTypeOf<LastOfUnion<never>>().toBeNever();
		expectTypeOf<UnionToTuple<Input>[number]>().toEqualTypeOf<Input>();
		expectTypeOf<UnionToTuple<Input>["length"]>().toEqualTypeOf<4>();
	});
});
