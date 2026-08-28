import { describe, expect, expectTypeOf, it } from "vitest";

import { entries as entriesOf } from "../../src/obj/entries";

describe("obj/entriesOf", () => {
	it("returns typed entries", () => {
		const actual = entriesOf({ name: "Ada", active: true } as const);

		expect(actual).toStrictEqual([
			["name", "Ada"],
			["active", true],
		]);
		expectTypeOf(actual).toEqualTypeOf<(["name", "Ada"] | ["active", true])[]>();
	});

	it("returns an empty array for an empty object", () => {
		expect(entriesOf({})).toStrictEqual([]);
	});

	it("follows Object.entries enumeration", () => {
		const symbol = Symbol("symbol");
		const value = Object.defineProperty({ visible: 1, [symbol]: 2 }, "hidden", { value: 3 });

		expect(entriesOf(value)).toStrictEqual([["visible", 1]]);
	});
});
