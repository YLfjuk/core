---
"@ylfjuk-core/types": patch
---

#### Features 🆕

- Added
  - Extends | A wrapper around the `extends` keyword', with option for strictness
  - HasDuplicates | Checks if an array has duplicate elements
  - If | A wrapper around conditional types
  - Join | Joins together `Stringifiable` elements
  - KeyPath | Extracts all possible key paths from a given object
  - MaskDates | Masks the `Date` type as a `string`
  - NonOptional | Makes all keys required
  - OmitBy | Omits keys by condition
  - OmitFunctions | Omits the set of properties that are functions
  - PartialDeep | Recursively makes all properties in `T` optional.
  - PickOptional | Picks optional properties from a given type `T`
  - Replace | Recursively replaces occurrences of type `R` in `T` with `N`.
  - Reverse | Reverses an array
  - Stringifiable | `Primitive`s that can be stringified, or an object with the `toString` method
  - SuggestStr | Similar to the `Suggest` type, but allows any  any string
  - ToStr | Stringifies values that can be turned into strings
  - UnknownArray | An array of unknown values
  - Whatever | Similar to the `Suggest` type, but allows any value

- Modified
  - Equals | Renamed from `Equal`
  - ExtractValues | Flattened the nesting
  - FN | Added better support for args array (breaking 💥)
  - MaskLiterals | Only accepts a `Primitive` type (breaking 💥)
  - Prettify | Prettifies the entire `object`, and avoids expanding the `Date` type
  - Suggest | Now a generic suggestion
  - SuggestStr | Split from `Suggest`

#### Chores 🧹

- Modified jsdoc comments
