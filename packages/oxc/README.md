# `@solana-config/oxc`

Shared [Oxlint](https://oxc.rs/docs/guide/usage/linter) and [Oxfmt](https://oxc.rs/docs/guide/usage/formatter) configurations for Solana projects. Matches the rules and style options from [`@solana-config/eslint`](../eslint) and [`@solana-config/prettier`](../prettier) to the Oxc-based toolchain.

Both configs ship in two formats — a CommonJS factory and a JSON file — so consumers can use either `oxlint.config.ts` / `oxfmt.config.ts` or `.oxlintrc.json` / `.oxfmtrc.json`.

## Install

```sh
pnpm add -D @solana-config/oxc oxlint oxlint-tsgolint oxfmt
```

`oxlint-tsgolint` is required for type-aware linting. Drop it if you don't enable `options.typeAware`.

## Oxlint usage

`options.typeAware` and `ignorePatterns` are root-config-only in Oxlint and cannot be inherited via `extends`. The shared config only sets `rules`, so consumers opt into type-aware linting in their own root config.

### TypeScript config (`oxlint.config.ts`)

```ts
import { defineConfig } from 'oxlint';

import solanaConfig from '@solana-config/oxc/oxlint';

export default defineConfig({
    extends: [solanaConfig],
    options: { typeAware: true },
});
```

### JSON config (`.oxlintrc.json`)

```json
{
    "extends": ["./node_modules/@solana-config/oxc/oxlint.json"],
    "options": { "typeAware": true }
}
```

## Oxfmt usage

Oxfmt has no `extends` mechanism, so consumers spread this config into their own `defineConfig({...})`.

### TypeScript config (`oxfmt.config.ts`)

```ts
import { defineConfig } from 'oxfmt';

import solanaFmt from '@solana-config/oxc/oxfmt';

export default defineConfig({ ...solanaFmt });
```

### JSON config (`.oxfmtrc.json`)

Oxfmt JSON configs do not support `extends`, so consumers either copy the contents of `oxfmt.json` or reference it via the `--config` CLI flag:

```sh
oxfmt --config ./node_modules/@solana-config/oxc/oxfmt.json
```
