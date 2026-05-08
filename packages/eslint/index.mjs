import perfectionistPlugin from "eslint-plugin-perfectionist";

import base from "./base.mjs";

export default [
  ...base,
  {
    plugins: {
      perfectionist: perfectionistPlugin,
    },
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
        },
      ],
      "no-unused-vars": "off",
      "perfectionist/sort-objects": "error",
    },
  },
];
