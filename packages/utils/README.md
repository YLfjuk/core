# @ylfjuk-core/utils &middot; ![GitHub License](https://img.shields.io/github/license/ylfjuk/core) ![NPM Version](https://img.shields.io/npm/v/%40ylfjuk-core/utils?logo=typescript)

Runtime utilities used by [`@ylfjuk/core`](../core/README.md).

## Install

```sh
pnpm add @ylfjuk-core/utils
```

This package is ESM-only and targets ES2024.

```ts
import { isDefined } from "@ylfjuk-core/utils";
```

## Migrate from Enum.toTuple

BREAKING CHANGE: `Enum.toTuple`, its `enumToTuple` alias, and the `Enum` namespace have been removed from `@ylfjuk-core/utils` and the `@ylfjuk/core` re-exports. `Enum` contained no other helpers.

The helper's ordered-tuple guarantee was unsound. Object types and unions cannot encode runtime insertion order, and unions discard duplicate values. For example, two object keys with the value `"bob"` produce two array entries at runtime but only one `"bob"` union member, so the claimed tuple could have the wrong length as well as the wrong positions.

Replace calls to `Enum.toTuple(Name)` or `enumToTuple(Name)` with `Object.values(Name)` when you need an array:

```ts
const Name = {
	Bob: "bob",
	Bert: "bert",
	AlsoBob: "bob",
} as const;

const names = Object.values(Name);
// Type: ("bob" | "bert")[]
// Runtime: ["bob", "bert", "bob"]
```

Remove the old imports. The array retains duplicate values and follows JavaScript property enumeration order, but its type does not promise a fixed length or a value at each position.

When exact positional typing matters, define an explicit tuple as the source of truth:

```ts
const names = ["bob", "bert", "bob"] as const;
type Name = (typeof names)[number]; // "bob" | "bert"
// typeof names: readonly ["bob", "bert", "bob"]
```

`UnionToTuple` remains public. Its element order is unspecified and unstable; it cannot predict `Object.values` order or recover duplicates discarded by a union. Do not cast the array to `UnionToTuple` to restore the removed guarantee.

## Development

From the repository root, use Node.js 22.18.0 or newer and run `pnpm run build`, `pnpm run test`, and `pnpm run test:types`.

## License

MIT [@YLfjuk](https://github.com/YLfjuk)
