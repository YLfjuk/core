import { describe, expectTypeOf, test } from "vitest";

import type { IsDisjointUnion } from "../src/is-disjoint-union";

describe("is disjoint union", () => {
	test("object members can intersect", () => {
		type Actual = IsDisjointUnion<{ a: string } | { b: number }>;
		expectTypeOf<Actual>().toEqualTypeOf<false>();
	});

	test("a non-union", () => {
		type Expected = false;

		type Actual = IsDisjointUnion<string>;

		expectTypeOf<Actual>().toEqualTypeOf<Expected>();
	});

	test("a disjoint union", () => {
		type Expected = true;

		type Actual = IsDisjointUnion<string | number>;

		expectTypeOf<Actual>().toEqualTypeOf<Expected>();
	});

	test("a disjoint const union", () => {
		type Expected = true;

		type Actual = IsDisjointUnion<"bob" | "bert">;

		expectTypeOf<Actual>().toEqualTypeOf<Expected>();
	});

	test("union with intersection", () => {
		type Expected = false;

		type Actual = IsDisjointUnion<string | "bob">;

		expectTypeOf<Actual>().toEqualTypeOf<Expected>();
	});
});
