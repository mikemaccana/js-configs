import eslint from "@eslint/js";
import perfectionistPlugin from "eslint-plugin-perfectionist";
import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

function addTypeScriptLanguageOptions(config) {
  return {
    ...config,
    languageOptions: {
      ...config.languageOptions,
      globals: {
        ...config.languageOptions?.globals,
        ...globals.es2020,
        ...globals["shared-node-browser"],
      },
      parserOptions: {
        projectService: true,
      },
      sourceType: "module",
    },
  };
}
export default defineConfig(
  globalIgnores(["**/dist/", "**/lib/", "**/*.json"]),
  eslint.configs.recommended,
  tseslint.configs.recommendedTypeChecked.map(addTypeScriptLanguageOptions),
  addTypeScriptLanguageOptions({
    files: ["**/*.ts"],
    plugins: {
      perfectionist: perfectionistPlugin,
    },
    rules: {
      "@typescript-eslint/no-floating-promises": "error",
      "@typescript-eslint/prefer-promise-reject-errors": "error",
      "@typescript-eslint/restrict-plus-operands": "error",
      "@typescript-eslint/restrict-template-expressions": "error",
      // See https://stackoverflow.com/questions/43353087/are-there-performance-concerns-with-return-await/70979225#70979225
      "@typescript-eslint/return-await": ["error", "always"],
      "@typescript-eslint/require-await": "error",
      "no-return-await": "off",
      "perfectionist/sort-imports": "error",
      "perfectionist/sort-interfaces": "error",
      "perfectionist/sort-object-types": "error",
      "perfectionist/sort-union-types": "error",
    },
    settings: {
      perfectionist: {
        ignoreCase: true,
        order: "asc",
        type: "alphabetical",
      },
    },
  })
);
