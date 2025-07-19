# @ylfjuk-core/utils

## 0.0.10

### Patch Changes

#### Features 🆕

- Added
  - Enum | Utility module for enums
  - enum/toTuple | Converts an `enum` into an ordered `tuple`

- Modified
  - Renamed `Arr`, `Json`, `Obj` and `Str` utilities internally

## 0.0.9

### Patch Changes

#### Features 🆕

- Added
  - jsonParse | A wrapper around `JSON.parse` that fixes the type
  - jsonSafeParse | A wrapper around `jsonParse` that returns a `Result` value instead of throwing
  - stringify | A wrapper around `JSON.stringify` that fixes the type
  - Json | Utility functions for JSON

## 0.0.8

### Patch Changes

#### Features 🆕

- Added
  - bool | A wrapper around `Boolean` that narrows the type to exclude falsy values
  - keysOf | A wrapper around `Object.keys` that retains the type of the keys
  - entriesOf | A wrapper around `Object.entries` that retains the type of the keys and values
  - arrIncludes | A wrapper around `Array.prototype.includes` that allows to check against any type
  - strStartsWith | A wrapper around `String.prototype.startsWith` that narrows the type to a template literal type
  - strEndsWith | A wrapper around `String.prototype.endsWith` that narrows the type to a template literal type
  - Arr | Utility functions for arrays
  - Obj | Utility functions for objects
  - Str | Utility functions for strings

#### Chores 🧹

- Added `"sideEffects": false` to the `package.json`

## 0.0.7

### Patch Changes

#### Features 🆕

- Modified
  - toggle | The `isEqual` arg now directly accepts both arguments for comparison (breaking 💥)

#### Chores 🧹

- Add the @since, @modified, and more to the jsdoc

## 0.0.6

### Patch Changes

#### Features 🆕

- Added Utilities:
  - toggle | toggles between elements in an array

## 0.0.5

### Patch Changes

#### Chores 🧹

- flattened & spread the files

#### Features 🆕

- Added the InfiniteObject proxy utility

## 0.0.4

### Patch Changes

- utils: removed prod check

## 0.0.3

### Patch Changes

- Removed peer dependency

## 0.0.2

### Patch Changes

- Added assertNever (w/ silent variant) utility function

## 0.0.1

### Patch Changes

- Bundled
