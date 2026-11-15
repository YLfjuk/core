---
"@ylfjuk-core/utils": patch
---

Fix `toggle` to advance from falsy current options, including `false`, `0`, `""`, and `null`. Explicit `undefined` now selects an option rather than acting as omission; omit the argument to start at the first option, and include `undefined` in the option type when passing it explicitly. Default equality now uses `Object.is`, so `NaN` matches itself and `+0` and `-0` are distinct. Pass `(a, b) => a === b` to retain strict equality.
