import { describe, expectTypeOf, it } from "vitest";

import type { HasDuplicates } from "../src/has-duplicates";

describe("HasDuplicates", () => {
	it("should return true when there are duplicate elements", () => {
		type Actual = HasDuplicates<[1, 2, 3, 1]>;
		type Expected = true;

		expectTypeOf<Actual>().toEqualTypeOf<Expected>();
	});

	it("should return false when there are no duplicate elements", () => {
		type Actual = HasDuplicates<[1, 2, 3]>;
		type Expected = false;

		expectTypeOf<Actual>().toEqualTypeOf<Expected>();
	});

	it("should return false when the array is empty", () => {
		type Actual = HasDuplicates<[]>;
		type Expected = false;

		expectTypeOf<Actual>().toEqualTypeOf<Expected>();
	});
});
