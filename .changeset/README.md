# Changesets

Run `pnpm run plan` and describe each user-visible package change. Commit the generated changeset with the code it describes.

On `main`, the release workflow uses Changesets to maintain a release pull request. Merging that pull request publishes changed public packages through npm trusted publishing.
