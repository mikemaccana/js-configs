/**
 * Shared Oxlint configuration for Solana Kit projects.
 *
 * Ports {@link https://npmjs.com/package/@solana/eslint-config-solana | @solana/eslint-config-solana}
 * to Oxlint. The configuration only sets `rules` — Oxlint requires `options.typeAware` and
 * `ignorePatterns` to live in the root config that consumes this one (see the example).
 *
 * Several of the rules below are type-aware. The consumer's root config must set
 * `options.typeAware: true` (or pass `--type-aware` on the CLI) and have
 * {@link https://npmjs.com/package/oxlint-tsgolint | oxlint-tsgolint} installed alongside
 * {@link https://npmjs.com/package/oxlint | oxlint} for those rules to fire.
 *
 * Authored as CommonJS so it can be imported from both CommonJS and ESM consumers.
 *
 * @example
 * ```ts
 * // oxlint.config.ts
 * import { defineConfig } from 'oxlint';
 *
 * import solanaConfig from '@solana-config/oxc/oxlint';
 *
 * export default defineConfig({
 *     extends: [solanaConfig],
 *     options: { typeAware: true },
 * });
 * ```
 *
 * @see {@link https://oxc.rs/docs/guide/usage/linter | Oxlint documentation}
 * @type {import('oxlint').OxlintConfig}
 */
module.exports = {
    rules: {
        // Mirrors `@typescript-eslint/no-unused-vars` from `@solana/eslint-config-solana`.
        // Oxlint's `eslint/no-unused-vars` is type-aware and supports the same options.
        'no-unused-vars': [
            'error',
            {
                argsIgnorePattern: '^_',
                destructuredArrayIgnorePattern: '^_',
            },
        ],
        // Replaces `eslint-plugin-sort-keys-fix`. Oxlint added autofix for this rule in v1.63.
        'sort-keys': 'error',
        // Type-aware rules from the Solana ESLint config. Several of these are already on by
        // default in Oxlint when `typeAware` is enabled, but are listed here explicitly to
        // preserve intent and stay stable across Oxlint version bumps.
        'typescript/no-floating-promises': 'error',
        'typescript/prefer-promise-reject-errors': 'error',
        'typescript/require-await': 'error',
        'typescript/restrict-plus-operands': 'error',
        'typescript/restrict-template-expressions': 'error',
        'typescript/return-await': ['error', 'always'],
    },
};
