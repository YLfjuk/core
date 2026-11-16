---
"@ylfjuk-core/types": patch
---

Fix Reverse to reverse readonly required tuples instead of returning an empty tuple. Reversed tuples remain mutable; existing array and optional/rest tuple fallback behavior is unchanged.
