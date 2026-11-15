---
"@ylfjuk-core/types": patch
"@ylfjuk/core": patch
---

BREAKING CHANGE: `Prettify<T>` now expands only one level, preserving nested property types. This also prevents callback properties from accepting non-functions in `AtLeastOne` and `ExactlyOne`.

Replace recursive uses with `PrettifyDeep<T>` or `Prettify.Deep<T>`. Both preserve functions and constructors, including attached properties, and leave Date and Map/Set collections unchanged. Arrays and tuples expand recursively; other objects are mapped structurally.
