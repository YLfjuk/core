# @ylfjuk/core &middot; ![GitHub License](https://img.shields.io/github/license/ylfjuk/core) ![NPM Version](https://img.shields.io/npm/v/%40ylfjuk%2Fcore?label=core&logo=typescript) ![NPM Version](https://img.shields.io/npm/v/%40ylfjuk-core%2Ftypes?label=types&logo=typescript) ![NPM Version](https://img.shields.io/npm/v/%40ylfjuk-core%2Futils?label=utils&logo=typescript)

Shared types and utilities for `@ylfjuk` projects.

## Packages

- [`@ylfjuk/core`](packages/core/README.md) re-exports the complete public API.
- [`@ylfjuk-core/types`](packages/types/README.md) provides TypeScript utility types.
- [`@ylfjuk-core/utils`](packages/utils/README.md) provides runtime utilities.

The runtime packages are ESM-only and target ES2024. Use `import`, not `require`.

## Development

Development requires Node.js 22.18+, 24.11+, or 26+ within the ranges declared in `package.json` and the pnpm version declared in `package.json`.

```sh
pnpm install --frozen-lockfile
pnpm run fmt:check
pnpm run lint
pnpm run test:types
pnpm run test
pnpm run coverage
pnpm run build
```

Oxfmt and Oxlint handle formatting and linting, Vitest runs tests and coverage, TypeScript checks source and test files, and tsdown builds and validates publishable packages with publint and Are the Types Wrong.

Each package's `tsconfig.test.json` includes its source and existing `.spec.ts` tests. Both `test:types` and Vitest use it, so `test`, `test:v`, and `coverage` check type assertions too. The source-only `tsconfig.json` files remain separate for package builds.

## Releases

Add a changeset with `pnpm run plan`. A releaser runs `pnpm run version` locally and commits the reviewed release changes.
After validation, merges to `main` publish package versions missing from npm and push release tags.

See the [release guide](.changeset/README.md) for version review, GitHub environment setup, and npm trusted publishing.
Complete that setup before enabling releases.

## License

MIT [@YLfjuk](https://github.com/YLfjuk)
