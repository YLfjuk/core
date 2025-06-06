# @ylfjuk-core/types

## 0.0.14

### Patch Changes

- b89cb4c: #### Features 🆕

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
    - SuggestStr | Similar to the `Suggest` type, but allows any any string
    - ToStr | Stringifies values that can be turned into strings
    - UnknownArray | An array of unknown values
    - Whatever | Similar to the `Suggest` type, but allows any value

  - Modified
    - Equals | Renamed from `Equal`
    - ExtractValues | Flattened the nesting
    - FN | Added better support for args array, and the `this` arg (breaking 💥)
    - MaskLiterals | Only accepts a `Primitive` type (breaking 💥)
    - Prettify | Prettifies the entire `object`, and avoids expanding the `Date` type
    - Suggest | Now a generic suggestion
    - SuggestStr | Split from `Suggest`

  #### Chores 🧹

  - Modified jsdoc comments

## 0.0.13

### Patch Changes

#### Features 🆕

- Added Types
  - SafeRecord | A record that emulates the `noUncheckedIndexedAccess` tsconfig setting
  - Result
  - ResultData | Extracts the data from a `Result` type
  - ResultError | Extracts the error from a `Result` type

- Modified Types
  - ValueOf | Add support for arrays
  - Extend

#### Chores 🧹

- Add the @since, @modified, and more to the jsdoc of the types

## 0.0.12

### Patch Changes

#### Features 🆕

- Added Types
  - Box | Boxes union types
  - Equal | Returns if two types are strictly equal
  - LessThanEqual | Returns if a number is less than or equal to another number | ⚠️ Floats Unsupported

- Modified Types
  - ArrayOfN | Fill now accepts any type

## 0.0.11

### Patch Changes

#### Features 🆕

- Added Types
  - `Increment` | Increments a N ∈ ℕ number by 1 | ⚠️ Negative/Floats Unsupported

#### Fixes 🩹

- Renamed `IsNatural` to `IsPositiveOrZero` to describe it better (breaking 💥)

## 0.0.10

### Patch Changes

#### Chores 🧹

- The package now ensures that it only exports types

#### Features 🆕

- Added Types

  - Abs | Returns the absolute value of a number
  - ArrayOfN | Returns an array of n length
  - AtLeastOne | Requires at least one of the fields in an object
  - ExactlyOne | Requires exactly one of the fields in an object
  - IsNatural | Returns if the number is an element of the Natural numbers group
  - IsTuple | Return if an array is a tuple
  - LessThan | Returns if a number is less than another number | ⚠️ Floats Unsupported
  - PickBy | Picks the fields of an object where the value matches the condition

- Modified Types
  - Primitive | Added support for `symbol` type
  - MaskLiterals | Trailing changes from the `Primitive` type modification

## 0.0.9

### Patch Changes

#### Chores 🧹

- flattened & spread the files

#### Features 🆕

- Added Types
  - DeepDict
  - EmptyObject
  - InverseExtract
  - MaskLiterals
  - NonEmptyArray
  - Primitive

#### Fixes 🩹

- Simplified the ExtractLiterals type (breaking 💥)

## 0.0.8

### Patch Changes

- Add the ExtractLiteral type

## 0.0.7

### Patch Changes

- Added union-related types

## 0.0.6

### Patch Changes

- added function return type logic to the extractValue type

## 0.0.5

### Patch Changes

- Added StrictOmit, FN types

## 0.0.4

### Patch Changes

- added AutoCompleteStr, Maybe, MappedEnum & ExtractValues types

## 0.0.3

### Patch Changes

- update dependencies

## 0.0.2

### Patch Changes

- Added tests

## 0.0.1

### Patch Changes

- Utility types
  - ValueOf
  - Prettify
  - Extend
  - AutoCompleteStr
