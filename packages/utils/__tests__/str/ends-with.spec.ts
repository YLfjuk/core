import { describe, expect, expectTypeOf, it } from "vitest";

import { endsWith as strEndsWith } from "../../src/str/ends-with";

describe("str/endsWith", () => {
	it.each([
		["value.json", ".json", true],
		["value.txt", ".json", false],
	] as const)("checks whether %s ends with %s", (value, suffix, expected) => {
		expect(strEndsWith(value, suffix)).toBe(expected);
	});

	it("narrows matching strings", () => {
		const value: string = "value.json";

		if (!strEndsWith(value, ".json")) return;

		expectTypeOf(value).toEqualTypeOf<`${string}.json`>();
	});
});
