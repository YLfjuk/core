import { describe, expect, expectTypeOf, it } from "vitest";

import { keysOf } from "../../src";

function keyList<K extends string>(value: Record<K, unknown>): K[] {
	return keysOf(value);
}

describe("obj/keysOf", () => {
	it("preserves generic string keys", () => {
		expect(keyList({ name: "Ada" })).toEqual(["name"]);
	});
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

	it("stringifies numeric keys and excludes symbols from types", () => {
		const symbol = Symbol("ignored");
		const value = { 7: "seven", label: true, [symbol]: 42 } as const;
		const actual = keysOf(value);
		expect(actual).toStrictEqual(["7", "label"]);
		expectTypeOf(actual).toEqualTypeOf<("7" | "label")[]>();
	});

	it("retains optional values without optional mapping artifacts", () => {
		const value: { 7?: string; label?: boolean } = { 7: undefined };
		const actual = keysOf(value);
		expect(actual).toStrictEqual(["7"]);
		expectTypeOf(actual).toEqualTypeOf<("7" | "label")[]>();
		expect(keysOf({} satisfies typeof value)).toStrictEqual([]);
	});
	it("returns only own enumerable keys", () => {
		class Example {
			visible = 1;
			inherited() {}
		}
		const value = Object.defineProperty(new Example(), "hidden", { value: 2 });
		expect(keysOf(value)).toStrictEqual(["visible"]);
	});
});
