# @ylfjuk/core &middot; ![GitHub License](https://img.shields.io/github/license/ylfjuk/core) ![NPM Version](https://img.shields.io/npm/v/%40ylfjuk/core?logo=typescript)

The complete public API for the `@ylfjuk` core packages.

## Install

```sh
pnpm add @ylfjuk/core
```

This package is ESM-only and targets ES2024.

```ts
import { isDefined } from "@ylfjuk/core";

const values = [0, null, "", undefined];
const defined = values.filter(isDefined); // [0, ""]
```

It re-exports [`@ylfjuk-core/types`](../types/README.md) and [`@ylfjuk-core/utils`](../utils/README.md).

## License

MIT [@YLfjuk](https://github.com/YLfjuk)
