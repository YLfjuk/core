# @ylfjuk/core &middot; ![GitHub License](https://img.shields.io/github/license/ylfjuk/core) ![NPM Version](https://img.shields.io/npm/v/%40ylfjuk%2Fcore?label=core&logo=typescript) ![NPM Version](https://img.shields.io/npm/v/%40ylfjuk-core%2Ftypes?label=types&logo=typescript) ![NPM Version](https://img.shields.io/npm/v/%40ylfjuk-core%2Futils?label=utils&logo=typescript)

Shared types and utilities for `@ylfjuk` projects.

## Packages

- [`@ylfjuk/core`](packages/core/README.md) re-exports the complete public API.
- [`@ylfjuk-core/types`](packages/types/README.md) provides TypeScript utility types.
- [`@ylfjuk-core/utils`](packages/utils/README.md) provides runtime utilities.

The runtime packages are ESM-only and target ES2024. Use `import`, not `require`.

## Development

Development requires Node.js 22.18.0 or newer and the pnpm version declared in `package.json`.

```sh
pnpm install --frozen-lockfile
pnpm run fmt:check
pnpm run lint
pnpm run test:types
pnpm run test
pnpm run coverage
pnpm run build
```

Oxfmt and Oxlint handle formatting and linting, Vitest runs tests and coverage, TypeScript checks declarations, and tsdown builds and validates publishable packages with publint and Are the Types Wrong.

## Releases

Add a changeset with `pnpm run plan`. Merges to `main` update a release pull request; merging that pull request publishes changed packages through npm trusted publishing.

Each public package must trust GitHub owner `YLfjuk`, repository `core`, workflow `release.yml`, with only `npm publish` allowed. The workflow uses OIDC and does not use an npm token.

## License

MIT [@YLfjuk](https://github.com/YLfjuk)
