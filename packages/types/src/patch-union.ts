import type { Box } from "./box.js";
import type { KeyofUnion } from "./keyof-union.js";

/**
 * Adds every key in an object union to each member while preserving its original property types.
 *
 * @remarks Use this when every union key must be accessible before narrowing to a specific member.
 *
 * @see {@link KeyofUnion} for extracting keys from a union type.
 *
 * @example
 * type Union = { bob: string; berta: boolean } | { bert: number; berta: boolean };
 * type PatchedUnion = PatchUnion<Union>; //? { bob: string; berta: boolean; bert?: undefined; } | { bert: number; berta: boolean; bob?: undefined; }
 *
 * @since 0.0.17
 */
export type PatchUnion<T> =
	Box<T> extends Box<infer _T>
		? _T extends infer U
			? U & {
					[K in Exclude<KeyofUnion<T>, keyof U>]?: never;
				}
			: never
		: never;
