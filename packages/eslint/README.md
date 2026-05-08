# `@solana-config/eslint`

Shared [ESLint](https://eslint.org/) configuration for Solana projects.

## Install

Install the package and the required peer dependencies:

```bash
pnpx install-peerdeps@2 --pnpm --dev @solana-config/eslint
```

## Usage

Create an `eslint.config.mjs` (ESLint v9+ flat config) at your project root and extend this package:

```js
import solanaConfig from '@solana-config/eslint';
import { defineConfig } from 'eslint/config';

export default defineConfig([{ files: ['**/*.ts', '**/*.(c|m)?js'], extends: [solanaConfig] }]);
```

### Sub-configurations

The package also exposes optional sub-configurations:

- `@solana-config/eslint/jest` — extra rules for Jest tests
- `@solana-config/eslint/react` — extra rules for React projects

```js
import solanaJestConfig from '@solana-config/eslint/jest';
import solanaReactConfig from '@solana-config/eslint/react';
```
