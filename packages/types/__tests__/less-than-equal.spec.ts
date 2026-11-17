import { describe, expectTypeOf, test } from "vitest";

import type { LessThanEqual } from "../src/less-than-equal";

describe("returns if a number is less than another number", () => {
	test("+x < +y", () => {
		type Actual = LessThanEqual<1, 2>;
		type Expected = true;

		expectTypeOf<Actual>().toEqualTypeOf<Expected>();
	});

	test("+x = +y", () => {
		type Actual = LessThanEqual<1, 1>;
		type Expected = true;

		expectTypeOf<Actual>().toEqualTypeOf<Expected>();
	});

	test("+x > +y", () => {
		type Actual = LessThanEqual<2, 1>;
		type Expected = false;

		expectTypeOf<Actual>().toEqualTypeOf<Expected>();
	});

	test("+x > 0", () => {
		type Actual = LessThanEqual<1, 0>;
		type Expected = false;

		expectTypeOf<Actual>().toEqualTypeOf<Expected>();
	});

	test("0 < +y", () => {
		type Actual = LessThanEqual<0, 1>;
		type Expected = true;

		expectTypeOf<Actual>().toEqualTypeOf<Expected>();
	});

	test("0 = 0", () => {
		type Actual = LessThanEqual<0, 0>;
		type Expected = true;

		expectTypeOf<Actual>().toEqualTypeOf<Expected>();
	});

	test("-x < +y", () => {
		type Actual = LessThanEqual<-3, 3>;
		type Expected = true;

		expectTypeOf<Actual>().toEqualTypeOf<Expected>();
	});

	test("+x > -y", () => {
		type Actual = LessThanEqual<3, -2>;
		type Expected = false;

		expectTypeOf<Actual>().toEqualTypeOf<Expected>();
	});

	test("-x = -y", () => {
		type Actual = LessThanEqual<-2, -2>;
		type Expected = true;

		expectTypeOf<Actual>().toEqualTypeOf<Expected>();
	});

	test("-x < -y", () => {
		type Actual = LessThanEqual<-3, -2>;
		type Expected = true;

		expectTypeOf<Actual>().toEqualTypeOf<Expected>();
	});

	test("-x > -y", () => {
		type Actual = LessThanEqual<-2, -3>;
		type Expected = false;

		expectTypeOf<Actual>().toEqualTypeOf<Expected>();
	});

	test("-x < 0", () => {
		type Actual = LessThanEqual<-3, 0>;
		type Expected = true;

		expectTypeOf<Actual>().toEqualTypeOf<Expected>();
	});

	test("0 > -y", () => {
		type Actual = LessThanEqual<0, -3>;
		type Expected = false;

		expectTypeOf<Actual>().toEqualTypeOf<Expected>();
	});

	test.todo("add float support");
});

describe("numeric input guards", () => {
	test("handles broad, unsupported, union, and boundary inputs", () => {
		expectTypeOf<LessThanEqual<number, number>>().toEqualTypeOf<boolean>();
		expectTypeOf<LessThanEqual<any, 2>>().toEqualTypeOf<boolean>();
		expectTypeOf<LessThanEqual<never, never>>().toEqualTypeOf<never>();
		expectTypeOf<LessThanEqual<1.5, 1.5>>().toEqualTypeOf<never>();
		expectTypeOf<LessThanEqual<-1.5, 2>>().toEqualTypeOf<never>();
		expectTypeOf<LessThanEqual<0 | 2, 1>>().toEqualTypeOf<boolean>();
	});
});
