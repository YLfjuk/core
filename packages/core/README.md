# @ylfjuk/core &middot; ![GitHub License](https://img.shields.io/github/license/ylfjuk/core) ![NPM Version](https://img.shields.io/npm/v/%40ylfjuk/core?logo=typescript)

The complete public API for the `@ylfjuk` core packages.

## Install

```sh
pnpm add @ylfjuk/core
```

This package is ESM-only and targets ES2024.

```ts
import { isDefined } from "@ylfjuk/core";
```

It re-exports [`@ylfjuk-core/types`](../types/README.md) and [`@ylfjuk-core/utils`](../utils/README.md).

## Migration

BREAKING CHANGE: the `Enum` namespace, `Enum.toTuple`, and `enumToTuple` re-exports have been removed. Use `Object.values` for an array, or define an explicit tuple when positions matter. See the [migration guide](../utils/README.md#migrate-from-enumtotuple) for examples and the ordering and duplicate-value limitations. `UnionToTuple` remains public with unspecified, unstable element order.

## Development

From the repository root, use Node.js 22.18.0 or newer and run `pnpm run build`, `pnpm run test`, and `pnpm run test:types`.

## License

MIT [@YLfjuk](https://github.com/YLfjuk)
