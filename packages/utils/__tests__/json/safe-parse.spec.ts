import { describe, expect, expectTypeOf, it } from "vitest";

import { safeParse as jsonSafeParse } from "../../src/json/safe-parse";

describe("json/safe-parse", () => {
	it("returns parsed data on success", () => {
		expect(jsonSafeParse('{"name":"Ada"}')).toStrictEqual({
			success: true,
			data: { name: "Ada" },
		});
	});

	it("preserves primitive literal types", () => {
		const result = jsonSafeParse("42");

		expect(result).toStrictEqual({ success: true, data: 42 });
		expectTypeOf(result.data).toEqualTypeOf<42>();
	});

	it("supports revivers", () => {
		const result = jsonSafeParse("42", (_key, value) => value * 2);

		expect(result).toStrictEqual({ success: true, data: 84 });
	});

	it("returns the parsing error on failure", () => {
		const result = jsonSafeParse("{");

		expect(result.success).toBe(false);
		if (result.success) return;

		expect(result.reason).toBeInstanceOf(SyntaxError);
	});

	it("handles null", () => {
		expect(jsonSafeParse(null)).toStrictEqual({ success: true, data: null });
	});
});
