import { describe, expectTypeOf, it } from "vitest";

import type { LastOfUnion, MemberOfUnion } from "@ylfjuk-core/types";

import type { LastOfUnion as LegacyPath } from "../src/last-of-union.js";

describe("LastOfUnion", () => {
	it("retains the public alias and existing source import path", () => {
		type Input = 1 | 2 | 3 | "bob";

		expectTypeOf<LastOfUnion<Input>>().toEqualTypeOf<MemberOfUnion<Input>>();
		expectTypeOf<LegacyPath<Input>>().toEqualTypeOf<MemberOfUnion<Input>>();
		expectTypeOf<LastOfUnion<"bob">>().toEqualTypeOf<"bob">();
		expectTypeOf<LastOfUnion<never>>().toBeNever();
		expectTypeOf<LastOfUnion<boolean>>().toEqualTypeOf<MemberOfUnion<boolean>>();
		expectTypeOf<LastOfUnion<string | "bob">>().toEqualTypeOf<string>();
	});
});
