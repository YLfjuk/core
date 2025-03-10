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

- Modified Types
  - MaskLiterals | Only accepts a `Primitive` type (breaking 💥)
  - Suggest | Now a generic suggestion

#### Chores 🧹

- Modified jsdoc comments
