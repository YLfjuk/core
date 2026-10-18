---
"@ylfjuk-core/utils": patch
"@ylfjuk-core/types": patch
"@ylfjuk/core": patch
---

BREAKING CHANGE: remove `Enum.toTuple`, its `enumToTuple` alias, and the otherwise empty `Enum` namespace from `@ylfjuk-core/utils` and the `@ylfjuk/core` umbrella re-exports. Imports of these APIs must be removed.

The helper's ordered-tuple guarantee was unsound: object types and unions cannot encode runtime insertion order, and unions discard duplicate values even though `Object.values` retains them. The claimed tuple could therefore have incorrect positions and length.

Replace `Enum.toTuple(enumLikeObject)` or `enumToTuple(enumLikeObject)` with `Object.values(enumLikeObject)` for an array without fixed positional typing. When exact positions matter, define an explicit tuple as the source of truth, for example `const names = ["bob", "bert", "bob"] as const`. See the [migration guide](https://github.com/YLfjuk/core/blob/main/packages/utils/README.md#migrate-from-enumtotuple).

Keep the public `UnionToTuple` type and clarify that its order is unspecified and unstable. It cannot predict `Object.values` order or recover duplicate values discarded by a union.

These patch bumps follow this repository's existing pre-1.0 practice for breaking changes; they do not declare a 1.0 release.
