---
"@ylfjuk-core/types": patch
---

Guard recursive numeric helpers against broad and fractional inputs. Preserve conservative array, number, and boolean results for broad inputs, reject unsupported literals, and prevent invalid accumulator bounds from recursing indefinitely.
