---
"@ylfjuk-core/types": patch
---

#### Features 🆕

- Added
  - SuggestStr | Similar to the `Suggest` type, but allows any  any string
  - Whatever | Similar to the `Suggest` type, but allows any value
  - NonOptional | Makes all keys required
  - Reverse | Reverses an array
  - UnknownArray | An array of unknown values
  - Stringifiable | `Primitive`s that can be stringified, or an object with the `toString` method
  - ToStr | Stringifies values that can be turned into strings
  - Join | Joins together `Stringifiable` elements
  - OmitFunctions | Omits the set of properties that are functions
  - Extends | A wrapper around the `extends` keyword', with option for strictness
  - If | A wrapper around conditional types
  - Guard | A guard wrapper for the `Date` type
  - DateGuard | A `Guard` wrapper for the `Date` type

- Modified
  - MaskLiterals | Only accepts a `Primitive` type (breaking 💥)
  - Suggest | Now a generic suggestion
  - SuggestStr | Split from `Suggest`
  - ExtractValues | Flattened the nesting
  - Prettify | Prettifies the entire `object`, and avoids expanding the `Date` type

#### Chores 🧹

- Modified jsdoc comments
