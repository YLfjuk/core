import type { Box } from "./box";
import type { KeyofUnion } from "./keyof-union";

/**
 * @describe Creates a type that represents a union of objects, where each object has all keys from the union, while preserving the original types.
 *
 * @note This type is useful when you need to be able to access any key from the union without having to check which specific type of the union you are dealing with.
 *
 * @see {@link KeyofUnion} for extracting keys from a union type.
 *
 * @example
 * type Union = { bob: string; berta: boolean } | { bert: number; berta: boolean };
 * type PatchedUnion = PatchUnion<Union>; //? { bob: string; berta: boolean; bert?: undefined; } | { bert: number; berta: boolean; bob?: undefined; }
 *
 * @since 0.0.17
 */
export type PatchUnion<T> = Box<T> extends Box<infer _T>
	? _T extends infer U
		? U & {
				[K in Exclude<KeyofUnion<T>, keyof U>]?: never;
			}
		: never
	: never;
