import type { MemberOfUnion } from "./member-of-union.js";

/**
 * Selects a single member of a union, or `never` for `never`.
 *
 * @deprecated Use {@link MemberOfUnion}. Selection is unspecified and
 * compiler-dependent; unions have no meaningful order or "last" member.
 *
 * @since 0.0.18
 */
export type LastOfUnion<U> = MemberOfUnion<U>;
