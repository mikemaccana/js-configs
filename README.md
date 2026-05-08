# JS configs

Shared JavaScript and TypeScript tool configurations for Solana projects, published as a small set of npm packages under the `@solana-config` scope.

## Packages

| Package                                            | Description                                                       |
| -------------------------------------------------- | ----------------------------------------------------------------- |
| [`@solana-config/eslint`](./packages/eslint)       | ESLint rules ([usage](./packages/eslint/README.md)).              |
| [`@solana-config/prettier`](./packages/prettier)   | Prettier rules ([usage](./packages/prettier/README.md)).          |
| [`@solana-config/oxc`](./packages/oxc)             | Oxlint and Oxfmt rules ([usage](./packages/oxc/README.md)).       |

Each package is versioned and published independently via [Changesets](https://github.com/changesets/changesets).

## Contributing

This repo uses [pnpm](https://pnpm.io/) workspaces and Changesets:

```sh
pnpm install
pnpm changeset add # describe a change
git commit -am "Describe the change"
git push
```

Once your PR merges to `main`, the Changesets bot opens (or updates) a "Publish packages" PR that bumps the affected package versions and publishes them to npm when merged.

There are no build or test steps — these are just configuration files. CI runs a minimal sanity check that each config parses correctly.

## License

[MIT](./LICENSE) — Solana Foundation
