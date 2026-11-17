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

## License

MIT [@YLfjuk](https://github.com/YLfjuk)
