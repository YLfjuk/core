# @ylfjuk/core

## 0.0.21

### Patch Changes

- d832695: Add `MemberOfUnion` as the preferred name for selecting a single union member with unspecified, compiler-dependent selection. Deprecate `LastOfUnion` while retaining it as a compatible alias with unchanged behavior.
- a3562ab: BREAKING CHANGE: remove `Enum.toTuple`, its `enumToTuple` alias, and the otherwise empty `Enum` namespace. Imports of these APIs must be removed.

    The helper's ordered-tuple guarantee was unsound: object types and unions cannot encode runtime insertion order, and unions discard duplicate values even though `Object.values` retains them. The claimed tuple could therefore have incorrect positions and length.

    Replace `Enum.toTuple(enumLikeObject)` or `enumToTuple(enumLikeObject)` with `Object.values(enumLikeObject)` for an array without fixed positional typing. When exact positions matter, define an explicit tuple as the source of truth, for example `const names = ["bob", "bert", "bob"] as const`. See the [migration guide](https://github.com/YLfjuk/core/blob/main/packages/utils/README.md#migrate-from-enumtotuple).

- f272e67: BREAKING CHANGE: `Prettify<T>` now expands only one level, preserving nested property types. This also prevents callback properties from accepting non-functions in `AtLeastOne` and `ExactlyOne`.

    Replace recursive uses with `PrettifyDeep<T>` or `Prettify.Deep<T>`. Both preserve functions and constructors, including attached properties, and leave Date and Map/Set collections unchanged. Arrays and tuples expand recursively; other objects are mapped structurally.

- Updated dependencies [a3562ab]
- Updated dependencies [2a10978]
- Updated dependencies [d832695]
- Updated dependencies [a3562ab]
- Updated dependencies [f272e67]
    - @ylfjuk-core/types@0.0.20
    - @ylfjuk-core/utils@0.0.12

## 0.0.20

### Patch Changes

- 6c2dedf: - Re-export `Func` as an alias for `FN`.
    - Include corrected `InfiniteObject` reflection behavior and complete `JSON.stringify` argument forwarding.
    - Modernize ESM package documentation.
- Updated dependencies [6c2dedf]
- Updated dependencies [6c2dedf]
    - @ylfjuk-core/types@0.0.19
    - @ylfjuk-core/utils@0.0.11

## 0.0.19

### Patch Changes

- Updated dependencies
    - @ylfjuk-core/types@0.0.18
    - @ylfjuk-core/utils@0.0.10

## 0.0.18

### Patch Changes

- Updated dependencies [dabc973]
- Updated dependencies [7544b97]
    - @ylfjuk-core/types@0.0.17
    - @ylfjuk-core/utils@0.0.9

## 0.0.17

### Patch Changes

#### Chores 🧹

- Added `"sideEffects": false` to the `package.json`

- Updated dependencies
- Updated dependencies
    - @ylfjuk-core/utils@0.0.8
    - @ylfjuk-core/types@0.0.16

## 0.0.16

### Patch Changes

- Updated dependencies
    - @ylfjuk-core/types@0.0.15

## 0.0.15

### Patch Changes

- Updated dependencies [18201d3]
- Updated dependencies [b89cb4c]
    - @ylfjuk-core/utils@0.0.7
    - @ylfjuk-core/types@0.0.14

## 0.0.14

### Patch Changes

- Updated dependencies
    - @ylfjuk-core/types@0.0.13

## 0.0.13

### Patch Changes

- Updated dependencies [4af919a]
- Updated dependencies [78da6dd]
- Updated dependencies [457d7e7]
    - @ylfjuk-core/types@0.0.12

## 0.0.12

### Patch Changes

- Updated dependencies
    - @ylfjuk-core/utils@0.0.6

## 0.0.11

### Patch Changes

- Updated dependencies
    - @ylfjuk-core/types@0.0.11

## 0.0.10

### Patch Changes

- Updated dependencies
    - @ylfjuk-core/types@0.0.10

## 0.0.9

### Patch Changes

- Updated dependencies
    - @ylfjuk-core/types@0.0.9
    - @ylfjuk-core/utils@0.0.5

## 0.0.8

### Patch Changes

- Updated dependencies
    - @ylfjuk-core/types@0.0.8

## 0.0.7

### Patch Changes

- specify deps

## 0.0.6

### Patch Changes

- utils: removed prod check
- Updated dependencies
    - @ylfjuk-core/utils@0.0.4

## 0.0.5

### Patch Changes

- Updated dependencies
    - @ylfjuk-core/utils@0.0.3

## 0.0.4

### Patch Changes

- Updated dependencies
    - @ylfjuk-core/utils@0.0.2
    - @ylfjuk-core/types@0.0.7

## 0.0.3

### Patch Changes

- Bundled
- Updated dependencies
    - @ylfjuk-core/utils@0.0.1

## 0.0.2

### Patch Changes

- Update the version of @ylfjuk-core/types

## 0.0.1

### Patch Changes

- init
