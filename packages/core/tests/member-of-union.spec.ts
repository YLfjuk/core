import { describe, expectTypeOf, it } from "vitest";

import type {
	LastOfUnion as TypesLastOfUnion,
	MemberOfUnion as TypesMemberOfUnion,
} from "@ylfjuk-core/types";
import type { LastOfUnion, MemberOfUnion } from "@ylfjuk/core";

describe("union type exports", () => {
	it("exposes the preferred name and compatibility alias through core", () => {
		type Input = 1 | 2 | 3 | "bob";

		expectTypeOf<MemberOfUnion<Input>>().toEqualTypeOf<TypesMemberOfUnion<Input>>();
		expectTypeOf<LastOfUnion<Input>>().toEqualTypeOf<TypesLastOfUnion<Input>>();
	});
});
