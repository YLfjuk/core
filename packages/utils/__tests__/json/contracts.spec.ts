import { describe, expect, expectTypeOf, it } from "vitest";

import type { Result } from "@ylfjuk-core/types";

import { parse } from "../../src/json/parse";
import { safeParse } from "../../src/json/safe-parse";
import { stringify } from "../../src/json/stringify";

function parseWithOptionalReviver(reviver?: (key: string, value: unknown) => string) {
	const parsed = parse("{}", reviver);
	const result = safeParse("{}", reviver);
	expectTypeOf(parsed).toEqualTypeOf<unknown>();
	expectTypeOf(result).toEqualTypeOf<Result<unknown, unknown>>();
	return { parsed, result };
}

describe("JSON contracts", () => {
	it("does not infer a transformed result from an optional reviver", () => {
		expect(parseWithOptionalReviver()).toStrictEqual({
			parsed: {},
			result: { success: true, data: {} },
		});
		expect(parseWithOptionalReviver(() => "changed")).toStrictEqual({
			parsed: "changed",
			result: { success: true, data: "changed" },
		});
		expectTypeOf(parse("{}", () => "changed")).toEqualTypeOf<string>();
		expectTypeOf(parse<string>("{}")).toEqualTypeOf<string>();
		expectTypeOf(safeParse<string>("{}")).toEqualTypeOf<Result<string, unknown>>();
	});

	it.each(["0xff", "NaN", "Infinity", "01", "undefined"])(
		"does not promise success for %s",
		(text) => {
			const result = safeParse(text);
			expectTypeOf(result).toEqualTypeOf<Result<unknown, SyntaxError>>();
			expect(result.success).toBe(false);
			expect(() => parse(text)).toThrow(SyntaxError);
		},
	);
	it.each([
		"1e3",
		" 42\n",
		"9007199254740993",
		"1.25",
		"-0",
		'"hello"',
		"[1,null]",
		'{"a":true}',
	])("matches native parsing for %s", (text) => {
		expect(parse(text)).toStrictEqual(JSON.parse(text));
		expect(safeParse(text)).toStrictEqual({ success: true, data: JSON.parse(text) });
	});
	it("retains proven precision without accepting other numeric grammar", () => {
		expectTypeOf(parse("-42")).toEqualTypeOf<-42>();
		expectTypeOf(parse("false")).toEqualTypeOf<false>();
		expectTypeOf(parse("null")).toEqualTypeOf<null>();
		expectTypeOf(parse("1e3")).toEqualTypeOf<unknown>();
		expectTypeOf(parse("01")).toEqualTypeOf<unknown>();
		expectTypeOf(safeParse("01")).toEqualTypeOf<Result<unknown, SyntaxError>>();
		expectTypeOf(parse("9007199254740993")).toEqualTypeOf<unknown>();
		expectTypeOf(safeParse("0xff")).toEqualTypeOf<Result<unknown, SyntaxError>>();
		expectTypeOf(safeParse("1e3")).toEqualTypeOf<Result<unknown, SyntaxError>>();
		// @ts-expect-error Tuple coercion is outside the supported input boundary.
		expect(safeParse([undefined]).success).toBe(false);
		// @ts-expect-error BigInt tuple coercion produces a number, not a BigInt.
		expect(parse([42n])).toBe(42);
	});
	it.each(["thrown", { error: true }, undefined])(
		"preserves reviver exception identity",
		(reason) => {
			const result = safeParse('{"nested":1}', () => {
				throw reason;
			});
			expectTypeOf(result).toEqualTypeOf<Result<never, unknown>>();
			expect(result.success).toBe(false);
			if (!result.success) expect(result.reason).toBe(reason);
		},
	);
	it("distinguishes a deleted root from failure and visits nested keys", () => {
		const keys: string[] = [];
		const result = safeParse('{"nested":1}', (key, value) => {
			keys.push(key);
			return key === "" ? undefined : value;
		});
		expect(keys).toEqual(["nested", ""]);
		expect(result).toStrictEqual({ success: true, data: undefined });
		expectTypeOf(safeParse<{ chosen: true }>("{}")).toEqualTypeOf<
			Result<{ chosen: true }, unknown>
		>();
	});
	it.each([
		"hello",
		'"\\\n\t',
		42,
		-0,
		1.25,
		1e21,
		NaN,
		Infinity,
		-Infinity,
		true,
		false,
		null,
		undefined,
		Symbol(),
		() => 1,
	])("matches native serialization for %s", (value) => {
		expect(stringify(value)).toBe(JSON.stringify(value));
	});
	it("types transformations and possible absent roots conservatively", () => {
		const transformed = stringify(42, () => "changed");
		expect(transformed).toBe('"changed"');
		expectTypeOf(transformed).toEqualTypeOf<string | undefined>();
		expectTypeOf(stringify("hello")).toEqualTypeOf<string>();
		expectTypeOf(stringify(1.25)).toEqualTypeOf<string>();
		expectTypeOf(stringify(42)).toEqualTypeOf<"42">();
		expectTypeOf(stringify(-0)).toEqualTypeOf<"0">();
		expectTypeOf(stringify(true)).toEqualTypeOf<"true">();
		const unknownValue: unknown = undefined;
		expectTypeOf(stringify(unknownValue, [])).toEqualTypeOf<string | undefined>();
		expect(stringify(unknownValue, [])).toBeUndefined();
		const removable = { toJSON: () => undefined };
		expectTypeOf(stringify(removable)).toEqualTypeOf<string | undefined>();
		expect(stringify(removable)).toBeUndefined();
		const callable = Object.assign(() => 1, { toJSON: () => "called" });
		expectTypeOf(stringify(callable)).toEqualTypeOf<string | undefined>();
		expect(stringify(callable, [])).toBe('"called"');
		expect(stringify({ toJSON: () => 3 }, null)).toBe("3");
		expect(stringify({ keep: 1, omit: 2 }, ["keep"])).toBe('{"keep":1}');
		expect(() => stringify(42n)).toThrow(TypeError);
	});
});
