import type { FN } from "@ylfjuk-core/types";

type Digit = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";
// At most 15 decimal digits stay within exact integer precision and avoid exponent formatting.
type SmallDigits<S extends string, Count extends unknown[] = []> = S extends ""
	? true
	: Count["length"] extends 15
		? false
		: S extends `${Digit}${infer Rest}`
			? SmallDigits<Rest, [...Count, unknown]>
			: false;

type SmallInteger<S extends string> = S extends `-${infer Rest}`
	? SmallDigits<Rest>
	: SmallDigits<S>;

export type ParsedPrimitive<S extends string | null> = S extends null | "null"
	? null
	: S extends "true"
		? true
		: S extends "false"
			? false
			: S extends `${infer N extends number}`
				? `${N}` extends S
					? SmallInteger<S> extends true
						? N
						: unknown
					: unknown
				: unknown;

export type StringifiedPrimitive<T> = T extends undefined | symbol
	? undefined
	: T extends null
		? "null"
		: T extends boolean
			? `${T}`
			: T extends number
				? SmallInteger<`${T}`> extends true
					? `${T}`
					: string
				: T extends string
					? string
					: string | undefined;

export type ReviverFN<R = unknown, T = any, K extends string = string> = FN<R, [key: K, value: T]>;
export type ReplacerFN = FN<any, [key: string, value: any]>;
