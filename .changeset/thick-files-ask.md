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
  - GuardDate | A `Guard` wrapper for the `Date` type
  - Replace | Recursively replaces occurrences of type `R` in `T` with `N`.
  - MaskDates | Masks the `Date` type as a `string`
  - PickOptional | Extracts optional properties from a given type `T`
  - PartialDeep | Recursively makes all properties in `T` optional.

- Modified
  - MaskLiterals | Only accepts a `Primitive` type (breaking 💥)
  - Suggest | Now a generic suggestion
  - SuggestStr | Split from `Suggest`
  - ExtractValues | Flattened the nesting
  - Prettify | Prettifies the entire `object`, and avoids expanding the `Date` type

#### Chores 🧹

- Modified jsdoc comments
