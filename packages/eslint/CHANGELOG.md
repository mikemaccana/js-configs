# @solana-config/eslint

## 0.2.1

### Patch Changes

- [`4b579dd`](https://github.com/solana-foundation/js-configs/commit/4b579ddb8964c5a07736872fca6ef18baea06a05) Thanks [@lorisleiva](https://github.com/lorisleiva)! - Fix ESLint 10 incompatibility by replacing abandoned sorting plugins with `eslint-plugin-perfectionist`. `eslint-plugin-typescript-sort-keys@3.3.0` calls `context.getSourceCode()`, which was deprecated in ESLint 9 and removed in ESLint 10, leaving the freshly-released 0.2.0 unable to load under its declared ESLint peer; upstream issue [#77](https://github.com/solana-foundation/js-configs/issues/77) has been open since April 2024 with no fix shipped and no publish in over a year. This release drops the `eslint-plugin-typescript-sort-keys`, `eslint-plugin-sort-keys-fix`, and `eslint-plugin-simple-import-sort` peers in favor of a single `eslint-plugin-perfectionist >=4.0.0` peer that is actively maintained and ESLint 10 compatible. The deprecated `@typescript-eslint/sort-type-constituents` rule is also removed in favor of `perfectionist/sort-union-types`. Although the peer-dependency surface changes, this ships as a patch because 0.2.0 is non-functional under ESLint 10 and consumers cannot use the package without the swap.

## 0.2.0

### Minor Changes

- [`3966519`](https://github.com/solana-foundation/js-configs/commit/3966519e7ce01357d2a5876a45a08b82ccdf2339) Thanks [@lorisleiva](https://github.com/lorisleiva)! - Modernize peer dependencies. Drops the redundant `@types/eslint` and the deprecated `@types/eslint__js` peers — modern `eslint` and `@eslint/js` ship their own type definitions. Drops the `jest` peer; this package never imports `jest` directly, and `eslint-plugin-jest` declares its own `jest` peer. Bumps to ESLint 10 (`eslint ^10.3.0`, `@eslint/js ^10.0.1`). Loosens floors where the API surface we use is stable across a whole major: `typescript-eslint ^8.0.0`, `eslint-plugin-jest ^29.0.0`, `eslint-plugin-react-hooks ^7.0.0`. Loosens `globals` to `>=14.0.0` (the version where the `es2020` set we use was added), `typescript` to `>=5.6.0`, and the three single-rule plugins (`simple-import-sort`, `sort-keys-fix`, `typescript-sort-keys`) to open `>=` floors. Tightens repository Node engines to `^22.13 || >=24` to match ESLint 10's runtime floor.

## 0.1.1

### Patch Changes

- [`e624fe8`](https://github.com/solana-foundation/js-configs/commit/e624fe8793322437776e49f934895d956ca10de3) Thanks [@lorisleiva](https://github.com/lorisleiva)! - Patch bump test after initial release
