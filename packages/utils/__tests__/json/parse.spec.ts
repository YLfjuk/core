import { describe, expect, expectTypeOf, it } from "vitest";

import { parse as jsonParse } from "../../src/json/parse";

describe("json/parse", () => {
	it("parses objects", () => {
		expect(jsonParse('{"name":"Ada"}')).toStrictEqual({ name: "Ada" });
	});

	it.each([
		["true", true],
		["42", 42],
		['"value"', "value"],
	] as const)("preserves the literal type of %s", (text, expected) => {
		expect(jsonParse(text)).toBe(expected);
	});

	it("supports revivers", () => {
		const actual = jsonParse('{"createdAt":"2026-08-23"}', (key, value) =>
			key === "createdAt" ? new Date(value) : value,
		);

		expect(actual).toStrictEqual({ createdAt: new Date("2026-08-23") });
	});

	it("throws for invalid JSON", () => {
		expect(() => jsonParse("{")).toThrow(SyntaxError);
	});

	it("handles null", () => {
		expect(jsonParse(null)).toBeNull();
	});

	expectTypeOf(jsonParse("true")).toEqualTypeOf<true>();
	expectTypeOf(jsonParse("42")).toEqualTypeOf<42>();
	expectTypeOf(jsonParse(null)).toEqualTypeOf<null>();
});
