# @ylfjuk-core/utils

## 0.0.12

### Patch Changes

- 2a10978: Fix `toggle` to advance from falsy current options, including `false`, `0`, `""`, and `null`. Explicit `undefined` now selects an option rather than acting as omission; omit the argument to start at the first option, and include `undefined` in the option type when passing it explicitly. Default equality now uses `Object.is`, so `NaN` matches itself and `+0` and `-0` are distinct. Pass `(a, b) => a === b` to retain strict equality.
- a3562ab: BREAKING CHANGE: remove `Enum.toTuple`, its `enumToTuple` alias, and the otherwise empty `Enum` namespace. Imports of these APIs must be removed.

    The helper's ordered-tuple guarantee was unsound: object types and unions cannot encode runtime insertion order, and unions discard duplicate values even though `Object.values` retains them. The claimed tuple could therefore have incorrect positions and length.

    Replace `Enum.toTuple(enumLikeObject)` or `enumToTuple(enumLikeObject)` with `Object.values(enumLikeObject)` for an array without fixed positional typing. When exact positions matter, define an explicit tuple as the source of truth, for example `const names = ["bob", "bert", "bob"] as const`. See the [migration guide](https://github.com/YLfjuk/core/blob/main/packages/utils/README.md#migrate-from-enumtotuple).

- Updated dependencies [a3562ab]
- Updated dependencies [d832695]
- Updated dependencies [f272e67]
    - @ylfjuk-core/types@0.0.20

## 0.0.11

### Patch Changes

- 6c2dedf: - Preserve `replacer` and `space` arguments in the typed `JSON.stringify` wrapper.
    - Keep `InfiniteObject` callable and constructable without violating JavaScript reflection invariants.
    - Modernize ESM API documentation.
- Updated dependencies [6c2dedf]
    - @ylfjuk-core/types@0.0.19

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
