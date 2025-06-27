import type { ExtractLiteral, FN, Primitive, ToStr } from "@ylfjuk-core/types";

export type StringifiablePrimitive = Exclude<Primitive, symbol | string>;
export type StringifiableTuplePrimitive =
	| [StringifiablePrimitive | ToStr<StringifiablePrimitive>]
	| [StringifiableTuplePrimitive];

export type ExtractTupleLiteral<T extends StringifiableTuplePrimitive> =
	T[0] extends infer U
		? U extends StringifiableTuplePrimitive
			? ExtractTupleLiteral<U>
			: U extends StringifiablePrimitive
				? U
				: U extends string
					? ExtractLiteral<U>
					: never
		: never;

export type ReviverFN<R = unknown, T = any, K extends string = string> = FN<
	R,
	[key: K, value: T]
>;

export type ReplacerFN = FN<any, [key: string, value: any]>;
