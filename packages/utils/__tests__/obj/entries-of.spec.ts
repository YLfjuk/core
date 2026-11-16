import { describe, expect, expectTypeOf, it } from "vitest";

import { entriesOf } from "../../src";

describe("obj/entriesOf", () => {
	it("preserves branded string keys", () => {
		type Brand = string & { readonly brand: unique symbol };
		const value: Record<Brand, number> = {};
		const actual = entriesOf(value);
		expectTypeOf(actual).toEqualTypeOf<[Brand, number][]>();
		expect(actual).toStrictEqual([]);
	});
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

	it("stringifies numeric keys and excludes symbols from types", () => {
		const symbol = Symbol("ignored");
		const value = { 7: "seven", label: true, [symbol]: 42 } as const;
		const actual = entriesOf(value);
		expect(actual).toStrictEqual([
			["7", "seven"],
			["label", true],
		]);
		expectTypeOf(actual).toEqualTypeOf<(["7", "seven"] | ["label", true])[]>();
	});

	it("retains optional values without optional mapping artifacts", () => {
		const value: { 7?: string; label?: boolean } = { 7: undefined };
		const actual = entriesOf(value);
		expect(actual).toStrictEqual([["7", undefined]]);
		expectTypeOf(actual).toEqualTypeOf<
			(["7", string | undefined] | ["label", boolean | undefined])[]
		>();
		expect(entriesOf({} satisfies typeof value)).toStrictEqual([]);
	});
});
