import { describe, expect, expectTypeOf, it } from "vitest";
import { Enum } from "../../src/enum";

describe("enum/toTuple", () => {
	it("should convert the enum's values into a tuple", () => {
		const Name = {
			Bob: "bob",
			Bert: "bert",
			Berta: "berta",
		} as const;

		const Names = Enum.toTuple(Name);

		type Actual = typeof Names;
		type Expected = ["bob", "bert", "berta"];

		expectTypeOf<Actual>().toEqualTypeOf<Expected>();
		expect(Names).toStrictEqual(["bob", "bert", "berta"]);
		expect(Names).not.toStrictEqual(["bert", "bob", "berta"]);
	});
});
