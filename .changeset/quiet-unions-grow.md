---
"@ylfjuk-core/types": patch
---

Allow UnionToTuple to convert larger unions before reaching the compiler's recursion depth limit, while preserving mutable tuples and unspecified member ordering.
