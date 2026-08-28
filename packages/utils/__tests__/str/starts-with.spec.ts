import { describe, expect, expectTypeOf, it } from "vitest";

import { startsWith as strStartsWith } from "../../src/str/starts-with";

describe("str/startsWith", () => {
	it.each([
		["prefix-value", "prefix-", true],
		["value", "prefix-", false],
	] as const)("checks whether %s starts with %s", (value, prefix, expected) => {
		expect(strStartsWith(value, prefix)).toBe(expected);
	});

	it("narrows matching strings", () => {
		const value: string = "prefix-value";

		if (!strStartsWith(value, "prefix-")) return;

		expectTypeOf(value).toEqualTypeOf<`prefix-${string}`>();
	});
});
