import { describe, expect, expectTypeOf, it } from "vitest";

import { keys as keysOf } from "../../src/obj/keys";

describe("obj/keysOf", () => {
	it("returns exact keys", () => {
		const actual = keysOf({ name: "Ada", active: true });

		expect(actual).toStrictEqual(["name", "active"]);
		expectTypeOf(actual).toEqualTypeOf<("name" | "active")[]>();
	});

	it("returns an empty array for an empty object", () => {
		expect(keysOf({})).toStrictEqual([]);
	});

	it("ignores symbols", () => {
		const symbol = Symbol("symbol");

		expect(keysOf({ [symbol]: "symbol" })).toStrictEqual([]);
	});
});
