---
"@solana-config/eslint": minor
---

Modernize peer dependencies. Drops the redundant `@types/eslint` and the deprecated `@types/eslint__js` peers — modern `eslint` and `@eslint/js` ship their own type definitions. Drops the `jest` peer; this package never imports `jest` directly, and `eslint-plugin-jest` declares its own `jest` peer. Bumps to ESLint 10 (`eslint ^10.3.0`, `@eslint/js ^10.0.1`). Loosens floors where the API surface we use is stable across a whole major: `typescript-eslint ^8.0.0`, `eslint-plugin-jest ^29.0.0`, `eslint-plugin-react-hooks ^7.0.0`. Loosens `globals` to `>=14.0.0` (the version where the `es2020` set we use was added), `typescript` to `>=5.6.0`, and the three single-rule plugins (`simple-import-sort`, `sort-keys-fix`, `typescript-sort-keys`) to open `>=` floors. Tightens repository Node engines to `^22.13 || >=24` to match ESLint 10's runtime floor.
