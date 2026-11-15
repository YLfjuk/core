# Releases

Run `pnpm run plan` for each user-visible package change and commit the changeset in the implementation PR.

A releaser runs `pnpm run version` locally in that PR or a coordinated version PR. Before running it, replace each released API's `@since next` with its actual planned package version. Review the resulting versions, dependency updates, changelogs, and consumed changesets together. Commit them for approval. CI never versions packages or opens version PRs.

Merging to `main` runs formatting, lint, types, tests, coverage, build/package checks, dependency audit, and `changeset pack`. Only successful validation of that exact commit permits the publish job to enter `npm-publish`. The publish-only action runs `pnpm run release` and pushes release tags. PR validation only packs into a temporary directory, with read-only permissions and no npm credentials or OIDC permission.

Publishing selects public package versions missing from npm; pending changesets do not prevent it. A plan alone does not authorize a new release. Before merging, compare local versions with npm, especially for a new package or an unpublished version already on `main`. Verify that every missing version contains only approved release content. Keep implementation and version PRs coordinated so a later version PR cannot accidentally include deferred APIs. Do not merge this workflow until existing unpublished versions and pending release plans have been reviewed.

## Maintainer setup

Complete this setup manually before enabling releases:

- In GitHub Settings → Environments, configure `npm-publish` with selected deployment branches limited to the branch `main`, and no tag rules. Configure required reviewers if release approval is needed. Merely referencing a missing environment creates it without protection.
- For every public package, configure an npm GitHub Actions trusted publisher for owner `YLfjuk`, repository `core`, workflow filename `release.yml`, and environment `npm-publish`. Allow direct publishing. Use GitHub-hosted runners. Do not add npm tokens to PRs or this workflow.
- Check package ownership and registration first. New packages require an explicitly approved initial registration/publish and trusted-publisher setup before relying on this flow; do not bootstrap them by casually merging a plan.
- Permit the pinned actions and release tag creation through the repository's Actions policy and tag rules. The workflow needs `contents: write` only for publishing tags/releases; permission for Actions to create PRs is unnecessary.

See the [publish-only action API](https://github.com/changesets/action/blob/ae32849d5ba541f9ae29e40e22a623bc13562f51/publish/README.md), [npm trusted publishing requirements](https://docs.npmjs.com/trusted-publishers/), and [GitHub environment setup](https://docs.github.com/en/actions/how-tos/deploy/configure-and-manage-deployments/manage-environments).
