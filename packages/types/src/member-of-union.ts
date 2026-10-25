import type { UnionToIntersection } from "./union-to-intersection.js";

/**
 * Selects a single member of a union, or `never` for `never`.
 *
 * Selection is unspecified and may differ between compiler versions and programs.
 *
 * @see {@link UnionToIntersection}
 *
 * @since @next
 */
export type MemberOfUnion<U> =
	UnionToIntersection<U extends any ? () => U : never> extends () => infer R ? R : never;
