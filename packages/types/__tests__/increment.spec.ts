import { describe, expectTypeOf, test } from "vitest";

import type { Increment } from "../src/increment";

describe("returns an increment of the provided value", () => {
	test("positive int", () => {
		type Actual = Increment<1>;
		type Expected = 2;

		expectTypeOf<Actual>().toEqualTypeOf<Expected>();
	});

	test("0", () => {
		type Actual = Increment<0>;
		type Expected = 1;

		expectTypeOf<Actual>().toEqualTypeOf<Expected>();
	});

	test('"negative" zero', () => {
		type Actual = Increment<-0>;
		type Expected = 1;

		expectTypeOf<Actual>().toEqualTypeOf<Expected>();
	});

	test("negative int", () => {
		type Actual = Increment<-1>;
		type Expected = "Error: Unsupported numeric value";

		expectTypeOf<Actual>().toEqualTypeOf<Expected>();
	});

	test.todo("float");
	test.todo("negative float");
});

describe("numeric input guards", () => {
	test("handles broad, unsupported, union, and boundary inputs", () => {
		expectTypeOf<Increment<number>>().toEqualTypeOf<number>();
		expectTypeOf<Increment<any>>().toEqualTypeOf<number>();
		expectTypeOf<Increment<never>>().toEqualTypeOf<never>();
		expectTypeOf<Increment<1.5>>().toEqualTypeOf<"Error: Unsupported numeric value">();
		expectTypeOf<Increment<-1.5>>().toEqualTypeOf<"Error: Unsupported numeric value">();
		expectTypeOf<Increment<0 | 2>>().toEqualTypeOf<1 | 3>();
		expectTypeOf<Increment<128>>().toEqualTypeOf<129>();
	});
});
