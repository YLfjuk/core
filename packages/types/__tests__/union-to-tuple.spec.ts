import { describe, expectTypeOf, it } from "vitest";

import type { MemberOfUnion } from "../src/member-of-union";
import type { UnionToTuple } from "../src/union-to-tuple";

describe("UnionToTuple", () => {
	it("should include each union member once in a tuple", () => {
		type Members = 1 | 2 | 3 | 4 | 5 | "bob" | 6;
		type Actual = UnionToTuple<Members>;

		// Union ordering is not guaranteed by TypeScript.
		expectTypeOf<Actual[number]>().toEqualTypeOf<Members>();
		expectTypeOf<Actual["length"]>().toEqualTypeOf<7>();
	});

	it("should convert never into an empty tuple", () => {
		expectTypeOf<UnionToTuple<never>>().toEqualTypeOf<[]>();
	});

	it("should convert a single member into a one-element tuple", () => {
		expectTypeOf<UnionToTuple<"bob">>().toEqualTypeOf<["bob"]>();
	});
	it("should preserve special inputs and mutable tuples", () => {
		expectTypeOf<UnionToTuple<any>>().toEqualTypeOf<[any]>();
		expectTypeOf<UnionToTuple<unknown>>().toEqualTypeOf<[unknown]>();
		type BooleanTuple = UnionToTuple<boolean>;
		expectTypeOf<BooleanTuple[number]>().toEqualTypeOf<boolean>();
		expectTypeOf<BooleanTuple["length"]>().toEqualTypeOf<2>();
		expectTypeOf<BooleanTuple>().toExtend<unknown[]>();
		expectTypeOf<UnionToTuple<string | "bob">>().toEqualTypeOf<[string]>();
	});

	it("should retain selection behavior for overlapping object members", () => {
		type Input = { value: string } | { value: "bob" };
		type Baseline<T> = [T] extends [never]
			? []
			: [...Baseline<Exclude<T, MemberOfUnion<T>>>, MemberOfUnion<T>];
		expectTypeOf<UnionToTuple<Input>[number]>().toEqualTypeOf<Baseline<Input>[number]>();
		expectTypeOf<UnionToTuple<Input>["length"]>().toEqualTypeOf<Baseline<Input>["length"]>();
	});

	it("should handle a union beyond the former recursion depth", () => {
		type Input =
			| "m0"
			| "m1"
			| "m2"
			| "m3"
			| "m4"
			| "m5"
			| "m6"
			| "m7"
			| "m8"
			| "m9"
			| "m10"
			| "m11"
			| "m12"
			| "m13"
			| "m14"
			| "m15"
			| "m16"
			| "m17"
			| "m18"
			| "m19"
			| "m20"
			| "m21"
			| "m22"
			| "m23"
			| "m24"
			| "m25"
			| "m26"
			| "m27"
			| "m28"
			| "m29"
			| "m30"
			| "m31"
			| "m32"
			| "m33"
			| "m34"
			| "m35"
			| "m36"
			| "m37"
			| "m38"
			| "m39"
			| "m40"
			| "m41"
			| "m42"
			| "m43"
			| "m44"
			| "m45"
			| "m46"
			| "m47"
			| "m48"
			| "m49";
		type Actual = UnionToTuple<Input>;
		expectTypeOf<Actual[number]>().toEqualTypeOf<Input>();
		expectTypeOf<Actual["length"]>().toEqualTypeOf<50>();
	});
});
