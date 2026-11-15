import { describe, expectTypeOf, it, test } from "vitest";

import type { AtLeastOne, ExactlyOne, Prettify, PrettifyDeep } from "../src/index";
import type { Primitive } from "../src/primitive";

describe("Prettify the type", () => {
	test("simple union", () => {
		type Bob = {
			Bob: string;
		};

		type Bert = {
			Bert: string;
		};

		type Both = Bob & Bert;

		type Expected = {
			Bob: string;
			Bert: string;
		};

		type Actual = Prettify<Both>;

		expectTypeOf<Actual>().toEqualTypeOf<Expected>();
	});

	test("complex union", () => {
		type Bob = {
			Bob: string;
		};

		type Bert = {
			Bert: string;
		};

		type Person = {
			name: string;
			age: number;
		};

		type Both = (Bob | Bert) & Person;

		type Expected =
			| {
					Bob: string;
					name: string;
					age: number;
			  }
			| {
					Bert: string;
					name: string;
					age: number;
			  };

		type Actual = Prettify<Both>;

		expectTypeOf<Actual>().toEqualTypeOf<Expected>();
	});

	test("deeply nested objects", () => {
		type Bob = {
			Bob: string;
		};

		type Bert = {
			Bert: string;
		};

		type Berta = {
			Berta: true;
		};

		type NestedObject =
			| {
					person: Bob | Bert;
					nested: {
						identity: Bob | Bert | (Berta & { birthdate: Date });
					};
			  }
			| {
					person: Bob & Bert;
			  };

		type Actual = PrettifyDeep<NestedObject>;

		type Expected =
			| {
					person:
						| {
								Bob: string;
						  }
						| {
								Bert: string;
						  };
					nested: {
						identity:
							| {
									Bob: string;
							  }
							| {
									Bert: string;
							  }
							| {
									Berta: true;
									birthdate: Date;
							  };
					};
			  }
			| {
					person: {
						Bob: string;
						Bert: string;
					};
			  };

		expectTypeOf<Actual>().toEqualTypeOf<Expected>();
	});

	it("should not expand a `Date` type", () => {
		type Actual = Prettify<Date>;

		type Expected = Date;

		expectTypeOf<Actual>().toEqualTypeOf<Expected>();
	});

	it("should not expand a field `Date` type", () => {
		type Actual = Prettify<{
			date: Date;
		}>;

		type Expected = {
			date: Date;
		};

		expectTypeOf<Actual>().toEqualTypeOf<Expected>();
	});

	it("should not expand a `Primitive` type", () => {
		type Actual = Prettify<Primitive>;

		type Expected = Primitive;

		expectTypeOf<Actual>().toEqualTypeOf<Expected>();
	});
});

test("shallow expansion preserves nested identity and modifiers", () => {
	type Nested = { a: string } & { b: number };
	type Input = { readonly nested?: Nested } & { cb: (n: number) => string };
	expectTypeOf<Prettify<Input>>().toEqualTypeOf<{
		readonly nested?: Nested;
		cb: (n: number) => string;
	}>();
	expectTypeOf<PrettifyDeep<Input>>().toEqualTypeOf<{
		readonly nested?: { a: string; b: number };
		cb: (n: number) => string;
	}>();
	expectTypeOf<Prettify.Deep<Input>>().toEqualTypeOf<PrettifyDeep<Input>>();
});

test("shallow expansion preserves empty and nullable types", () => {
	expectTypeOf<Prettify<never>>().toEqualTypeOf<never>();
	expectTypeOf<Prettify<null | undefined>>().toEqualTypeOf<null | undefined>();
	expectTypeOf<Prettify<{ a: 1 } | { b: 2 }>>().toEqualTypeOf<{ a: 1 } | { b: 2 }>();
});

test("composition utilities retain callback signatures", () => {
	type Input = { cb: (n: number) => string };
	expectTypeOf<AtLeastOne<Input>>().toEqualTypeOf<Input>();
	expectTypeOf<ExactlyOne<Input>>().toEqualTypeOf<Input>();
	// @ts-expect-error A callback cannot be replaced by a number.
	const atLeast: AtLeastOne<Input> = { cb: 123 };
	// @ts-expect-error A callback cannot be replaced by a number.
	const exactly: ExactlyOne<Input> = { cb: 123 };
	void atLeast;
	void exactly;
	expectTypeOf<PrettifyDeep<{ nested: Input }>["nested"]["cb"]>().toEqualTypeOf<Input["cb"]>();
});

test("deep expansion preserves signatures and their attached properties", () => {
	type Callable = { (value: string): number; (value: number): string; meta: { a: 1 } & { b: 2 } };
	type Constructor = abstract new (value: string) => { value: string };
	expectTypeOf<PrettifyDeep<Callable>>().toEqualTypeOf<Callable>();
	expectTypeOf<PrettifyDeep<Constructor>>().toEqualTypeOf<Constructor>();
	expectTypeOf<PrettifyDeep<{ ctor: Constructor }>["ctor"]>().toEqualTypeOf<Constructor>();
});

test("deep expansion retains tuple and array structure", () => {
	type Item = { a: 1 } & { b: 2 };
	type Expanded = { a: 1; b: 2 };
	expectTypeOf<PrettifyDeep<readonly [Item, Item?, ...Item[]]>>().toEqualTypeOf<
		readonly [Expanded, Expanded?, ...Expanded[]]
	>();
	expectTypeOf<PrettifyDeep<[Item]>>().toEqualTypeOf<[Expanded]>();
	expectTypeOf<PrettifyDeep<Item[]>>().toEqualTypeOf<Expanded[]>();
	expectTypeOf<PrettifyDeep<readonly Item[]>>().toEqualTypeOf<readonly Expanded[]>();
});

test("deep expansion preserves primitive, Date and collection leaves", () => {
	type Item = { a: 1 } & { b: 2 };
	type Leaves =
		| Primitive
		| Date
		| Map<string, Item>
		| ReadonlyMap<string, Item>
		| Set<Item>
		| ReadonlySet<Item>
		| WeakMap<Item, Item>
		| WeakSet<Item>;
	expectTypeOf<PrettifyDeep<Leaves>>().toEqualTypeOf<Leaves>();
	expectTypeOf<PrettifyDeep<{ value: Leaves }>>().toEqualTypeOf<{ value: Leaves }>();
});
