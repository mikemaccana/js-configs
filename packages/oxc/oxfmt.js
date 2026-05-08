/**
 * Shared Oxfmt configuration for Solana Kit projects.
 *
 * Ports {@link https://npmjs.com/package/@solana/prettier-config-solana | @solana/prettier-config-solana}
 * to Oxfmt with the Solana code style: 4-space indent, 120-char print width,
 * single quotes, semicolons, arrow parentheses avoided where possible.
 *
 * Adds {@link https://oxc.rs/docs/guide/usage/formatter/sorting | `sortImports`}
 * (the Oxfmt built-in import sorter, disabled by default) to replace
 * `eslint-plugin-simple-import-sort/imports` from `@solana/eslint-config-solana`,
 * which has no native equivalent in Oxlint.
 *
 * Oxfmt has no `extends` mechanism, so consumers spread this object into their
 * own `defineConfig({...})`.
 *
 * Authored as CommonJS so it can be imported from both CommonJS and ESM consumers.
 *
 * @example
 * ```ts
 * // oxfmt.config.ts
 * import { defineConfig } from 'oxfmt';
 *
 * import solanaFmt from '@solana-config/oxc/oxfmt';
 *
 * export default defineConfig({ ...solanaFmt });
 * ```
 *
 * @see {@link https://oxc.rs/docs/guide/usage/formatter | Oxfmt documentation}
 * @type {import('oxfmt').OxfmtConfig}
 */
module.exports = {
    arrowParens: 'avoid',
    bracketSameLine: false,
    bracketSpacing: true,
    jsxSingleQuote: false,
    overrides: [
        {
            files: ['*.yaml', '*.yml'],
            options: { tabWidth: 2 },
        },
    ],
    printWidth: 120,
    quoteProps: 'as-needed',
    semi: true,
    singleQuote: true,
    sortImports: true,
    tabWidth: 4,
    useTabs: false,
};
