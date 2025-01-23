# @ylfjuk-core/types

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
