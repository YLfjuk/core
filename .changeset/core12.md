---
"@ylfjuk-core/types": patch
---

Fix Join to retain separators around empty elements and accept readonly tuples. Broad arrays, variadic tuples, and optional tuples now return conservative string results instead of incorrect exact literals. Consumers relying on those former literal results may need to widen their annotations.
