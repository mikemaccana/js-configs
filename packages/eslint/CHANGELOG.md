# @solana-config/eslint

## 0.2.3

### Patch Changes

- [`d58fb57`](https://github.com/solana-foundation/js-configs/commit/d58fb576bcf7ccbc472768d1c2822b0ff94bac98) Thanks [@lorisleiva](https://github.com/lorisleiva)! - Revert the ESLint 10 bump and the `eslint-plugin-perfectionist` swap from 0.2.x. The rule set and plugin choices are restored to what 0.1.x shipped — `eslint-plugin-simple-import-sort`, `eslint-plugin-sort-keys-fix`, `eslint-plugin-typescript-sort-keys`, and the `@typescript-eslint/sort-type-constituents` rule are back, and the ESLint and `@eslint/js` peers move back to `^9.39.1`. The 0.2.0 peer-dependency cleanup is preserved: `@types/eslint`, `@types/eslint__js`, and `jest` peers remain dropped, and the loose `>=` floors on the single-rule plugins and on `globals`, `typescript`, `typescript-eslint`, `eslint-plugin-jest`, and `eslint-plugin-react-hooks` are kept. The `typescript-eslint <8.59.0` pin from 0.2.2 is preserved as well to keep the `no-unnecessary-type-assertion` regression at bay. Net effect: consumers on 0.2.x who were seeing import-sort, key-sort, and union-type churn from perfectionist will see those diffs revert; rule behaviors return to what they were before 0.2.0.

## 0.2.2

### Patch Changes

- [`4084d83`](https://github.com/solana-foundation/js-configs/commit/4084d8395569d4e39e0b9002806a096f549ad48a) Thanks [@lorisleiva](https://github.com/lorisleiva)! - Pin `typescript-eslint` to `^8.0.0 <8.59.0` to avoid a `no-unnecessary-type-assertion` regression introduced in `@typescript-eslint/eslint-plugin@8.59.0` by [PR #11789](https://github.com/typescript-eslint/typescript-eslint/pull/11789), which rewrites the rule to flag any assertion where the source is assignable to the target. Multiple confirmed false-positive regressions remain open on the upstream tracker: [#12277](https://github.com/typescript-eslint/typescript-eslint/issues/12277) (discriminated unions), [#12276](https://github.com/typescript-eslint/typescript-eslint/issues/12276) (template literals), [#12271](https://github.com/typescript-eslint/typescript-eslint/issues/12271) (enums), [#12270](https://github.com/typescript-eslint/typescript-eslint/issues/12270) (nested optional properties), and [#12268](https://github.com/typescript-eslint/typescript-eslint/issues/12268) (array type inference). Because the rule is enabled with `error` severity by `recommendedTypeChecked` (which this config extends) and is auto-fixable, consumers running `eslint --fix` against `@solana-config/eslint@0.2.1` with `typescript-eslint@8.59.x` would see load-bearing assertions silently stripped, breaking compilation in cases where the cast is what teaches TypeScript a function's return type. The pin can be relaxed once upstream lands fixes for the open issues, likely in a future 8.59.x patch or 8.60.x minor.

## 0.2.1

### Patch Changes

- [`4b579dd`](https://github.com/solana-foundation/js-configs/commit/4b579ddb8964c5a07736872fca6ef18baea06a05) Thanks [@lorisleiva](https://github.com/lorisleiva)! - Fix ESLint 10 incompatibility by replacing abandoned sorting plugins with `eslint-plugin-perfectionist`. `eslint-plugin-typescript-sort-keys@3.3.0` calls `context.getSourceCode()`, which was deprecated in ESLint 9 and removed in ESLint 10, leaving the freshly-released 0.2.0 unable to load under its declared ESLint peer; upstream issue [#77](https://github.com/solana-foundation/js-configs/issues/77) has been open since April 2024 with no fix shipped and no publish in over a year. This release drops the `eslint-plugin-typescript-sort-keys`, `eslint-plugin-sort-keys-fix`, and `eslint-plugin-simple-import-sort` peers in favor of a single `eslint-plugin-perfectionist >=4.0.0` peer that is actively maintained and ESLint 10 compatible. The deprecated `@typescript-eslint/sort-type-constituents` rule is also removed in favor of `perfectionist/sort-union-types`. Although the peer-dependency surface changes, this ships as a patch because 0.2.0 is non-functional under ESLint 10 and consumers cannot use the package without the swap.

## 0.2.0

### Minor Changes

- [`3966519`](https://github.com/solana-foundation/js-configs/commit/3966519e7ce01357d2a5876a45a08b82ccdf2339) Thanks [@lorisleiva](https://github.com/lorisleiva)! - Modernize peer dependencies. Drops the redundant `@types/eslint` and the deprecated `@types/eslint__js` peers — modern `eslint` and `@eslint/js` ship their own type definitions. Drops the `jest` peer; this package never imports `jest` directly, and `eslint-plugin-jest` declares its own `jest` peer. Bumps to ESLint 10 (`eslint ^10.3.0`, `@eslint/js ^10.0.1`). Loosens floors where the API surface we use is stable across a whole major: `typescript-eslint ^8.0.0`, `eslint-plugin-jest ^29.0.0`, `eslint-plugin-react-hooks ^7.0.0`. Loosens `globals` to `>=14.0.0` (the version where the `es2020` set we use was added), `typescript` to `>=5.6.0`, and the three single-rule plugins (`simple-import-sort`, `sort-keys-fix`, `typescript-sort-keys`) to open `>=` floors. Tightens repository Node engines to `^22.13 || >=24` to match ESLint 10's runtime floor.

## 0.1.1

### Patch Changes

- [`e624fe8`](https://github.com/solana-foundation/js-configs/commit/e624fe8793322437776e49f934895d956ca10de3) Thanks [@lorisleiva](https://github.com/lorisleiva)! - Patch bump test after initial release
