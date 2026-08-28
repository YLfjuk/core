import type { UnionToIntersection } from "./union-to-intersection.js";

/**
 * Extracts the last type from a union.
 *
 * @see {@link UnionToIntersection}
 *
 * @since 0.0.18
 */
export type LastOfUnion<U> =
	UnionToIntersection<U extends any ? () => U : never> extends () => infer R ? R : never;
