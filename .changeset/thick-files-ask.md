---
"@ylfjuk-core/types": patch
---

#### Features 🆕

- Added Types
  - SuggestStr | Similar to the `Suggest` type, but allows any  any string
  - Whatever | Similar to the `Suggest` type, but allows any value
  - NonOptional | Makes all keys required
  - Reverse | Reverses an array
  - UnknownArray | An array of unknown values
  - Stringifiable | `Primitive`s that can be stringified, or an object with the `toString` method
  - Stringify | Stringifies values that can be stringified
  - Join | Joins together `Stringifiable` elements
  - OmitFunctions | Omits the set of properties that are functions

- Modified Types
  - MaskLiterals | Only accepts a `Primitive` type (breaking 💥)
  - Suggest | Now a generic suggestion

#### Chores 🧹

- Modified jsdoc comments
