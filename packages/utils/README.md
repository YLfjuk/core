# @ylfjuk-core/utils &middot; ![GitHub License](https://img.shields.io/github/license/ylfjuk/core) ![NPM Version](https://img.shields.io/npm/v/%40ylfjuk-core/utils?logo=typescript)

Runtime utilities used by [`@ylfjuk/core`](../core/README.md).

## Install

```sh
pnpm add @ylfjuk-core/utils
```

This package is ESM-only and targets ES2024.

```ts
import { isDefined } from "@ylfjuk-core/utils";

const values = [0, null, "", undefined];
const defined = values.filter(isDefined); // [0, ""]
```

## Enum values

`Enum.toTuple`, `enumToTuple`, and the `Enum` namespace have been removed, including from `@ylfjuk/core`.
Use `Object.values(value)` for an array, or define an `as const` tuple when you need exact positional types.

`Object.values` keeps duplicates and follows JavaScript property enumeration order, but does not provide a fixed tuple type.
`UnionToTuple` has unspecified, unstable element order and cannot recover duplicates or predict `Object.values` order.

## License

MIT [@YLfjuk](https://github.com/YLfjuk)
