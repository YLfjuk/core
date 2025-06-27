import { describe, expectTypeOf, it } from "vitest";
import type { KeyofUnion } from "../src/keyof-union";

describe("KeyofUnion", () => {
	it("should extract keys from a union type", () => {
		type Union = { bob: string } | { bert: number };
		type Actual = KeyofUnion<Union>;

		type Expected = "bob" | "bert";

		expectTypeOf<Actual>().toEqualTypeOf<Expected>();
	});

	it("should handle complex unions", () => {
		type ComplexUnion = { a: string; b: boolean; e: null } | { c: number; d: string; e: null };
		type Actual = KeyofUnion<ComplexUnion>;

		type Expected = "a" | "b" | "c" | "d" | "e";

		expectTypeOf<Actual>().toEqualTypeOf<Expected>();
	});
});
