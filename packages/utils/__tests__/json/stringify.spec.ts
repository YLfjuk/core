import { describe, expect, expectTypeOf, it } from "vitest";

import { stringify as jsonStringify } from "../../src/json/stringify";

describe("json/stringify", () => {
	it("serializes values", () => {
		expect(jsonStringify({ name: "Ada", active: true })).toBe('{"name":"Ada","active":true}');
	});

	it.each([undefined, Symbol(), () => undefined])("returns undefined for %s", (value) => {
		expect(jsonStringify(value)).toBeUndefined();
	});

	it("forwards replacers", () => {
		const actual = jsonStringify({ keep: 1, remove: 2 }, (key, value) =>
			key === "remove" ? undefined : value,
		);

		expect(actual).toBe('{"keep":1}');
	});

	it("throws for circular values", () => {
		const value: { self?: unknown } = {};
		value.self = value;

		expect(() => jsonStringify(value)).toThrow(TypeError);
	});

	it("forwards indentation", () => {
		expect(jsonStringify({ value: 1 }, null, 2)).toBe('{\n  "value": 1\n}');
	});

	expectTypeOf(jsonStringify(42)).toEqualTypeOf<"42">();
	expectTypeOf(jsonStringify(undefined)).toEqualTypeOf<undefined>();
});
