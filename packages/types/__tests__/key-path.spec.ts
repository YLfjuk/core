import { describe, expectTypeOf, it } from "vitest";

import type { Primitive } from "../src";
import type { KeyPath } from "../src/key-path";

describe("KeyPath", () => {
	it("should extract key paths from an object", () => {
		type Obj = {
			a: string;
			b: number;
			c: {
				d: boolean;
				e: string[];
			};
			arr: {
				f: string;
			}[];
			tuple: [first: number, second: { g: Date }];
		};

		type Actual = KeyPath<Obj>;
		type Expected =
			| "a"
			| "b"
			| "c"
			| "c.d"
			| "c.e"
			| `c.e.${number}`
			| "arr"
			| `arr.${number}`
			| `arr.${number}.f`
			| "tuple"
			| "tuple.0"
			| "tuple.1"
			| "tuple.1.g";

		expectTypeOf<Actual>().toEqualTypeOf<Expected>();
	});

	it("should extract key paths from a primitive array", () => {
		type Arr = Primitive[];

		type Actual = KeyPath<Arr>;
		type Expected = `${number}`;

		expectTypeOf<Actual>().toEqualTypeOf<Expected>();
	});

	it("should extract key paths from an array", () => {
		type Arr = { a: number }[];

		type Actual = KeyPath<Arr>;
		type Expected = `${number}` | `${number}.a`;

		expectTypeOf<Actual>().toEqualTypeOf<Expected>();
	});

	it("should extract key paths from a tuple", () => {
		type Tuple = [number, { a: string }];

		type Actual = KeyPath<Tuple>;
		type Expected = "0" | "1" | "1.a";

		expectTypeOf<Actual>().toEqualTypeOf<Expected>();
	});

	it("should not extract key paths from a `Date`", () => {
		type Actual = KeyPath<Date>;
		type Expected = never;

		expectTypeOf<Actual>().toEqualTypeOf<Expected>();
	});
});

describe("readonly key paths", () => {
	it("uses element paths without array members", () => {
		expectTypeOf<KeyPath<readonly { x: number }[]>>().toEqualTypeOf<
			`${number}` | `${number}.x`
		>();
		expectTypeOf<
			Extract<KeyPath<readonly { x: number }[]>, "map" | "length">
		>().toEqualTypeOf<never>();
		expectTypeOf<
			KeyPath<{ readonly rows: readonly { readonly dates: readonly Date[] }[] }>
		>().toEqualTypeOf<
			"rows" | `rows.${number}` | `rows.${number}.dates` | `rows.${number}.dates.${number}`
		>();
	});
	it("handles required, optional, and variadic tuples", () => {
		expectTypeOf<KeyPath<readonly [number, { x: number }]>>().toEqualTypeOf<
			"0" | "1" | "1.x"
		>();
		expectTypeOf<KeyPath<readonly [number, { x: number }?]>>().toEqualTypeOf<
			"0" | "1" | "1.x"
		>();
		expectTypeOf<KeyPath<readonly [{ x: number }, ...{ y: number }[]]>>().toEqualTypeOf<
			`${number}` | `${number}.x` | `${number}.y`
		>();
		expectTypeOf<
			Extract<KeyPath<readonly [number]>, "map" | "length">
		>().toEqualTypeOf<never>();
	});
});
