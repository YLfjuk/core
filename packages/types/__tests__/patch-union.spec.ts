import { describe, expectTypeOf, it } from "vitest";
import type { PatchUnion } from "./../src/patch-union";
import type { Prettify } from "./../src/prettify";

describe("PatchUnion", () => {
	it("should extract keys from a union type", () => {
		type Union = { bob: string } | { bert: number };
		type Actual = Prettify<PatchUnion<Union>>;

		type Expected = { bob: string; bert?: undefined } | { bert: number; bob?: undefined };

		expectTypeOf<Actual>().toEqualTypeOf<Expected>();
	});

	it("should handle complex unions", () => {
		type ComplexUnion = { a: string; b: boolean; e: null } | { c: number; d: string; e: null };
		type Actual = Prettify<PatchUnion<ComplexUnion>>;

		type Expected =
			| { a: string; b: boolean; e: null; c?: undefined; d?: undefined }
			| { c: number; d: string; e: null; a?: undefined; b?: undefined };

		expectTypeOf<Actual>().toEqualTypeOf<Expected>();
	});
});
