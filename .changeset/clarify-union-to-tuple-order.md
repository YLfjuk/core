---
"@ylfjuk-core/types": patch
---

Clarify that `UnionToTuple` element order is unspecified and unstable. It cannot predict `Object.values` order or recover duplicate values discarded by a union.
