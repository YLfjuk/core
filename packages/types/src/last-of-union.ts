import type { UnionToIntersection } from "./union-to-intersection";

/**
 * @description Extracts the last type from a union type
 *
 * @see {@link UnionToIntersection}
 *
 * @since 0.0.18
 */
export type LastOfUnion<U> = UnionToIntersection<U extends any ? () => U : never> extends () => infer R
	? R
	: never;
