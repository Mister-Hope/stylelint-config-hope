import type { Config } from "stylelint";

import { orderRules } from "./order/index.js";
import { scss } from "./scss.js";

const config: Config = {
  extends: ["stylelint-config-standard"],
  plugins: ["stylelint-order"],
  rules: {
    // disabled for properties order
    "declaration-empty-line-before": null,

    // new rules
    "color-hex-alpha": "never",
    "color-hex-length": "short",
    "color-named": "never",
    "max-nesting-depth": [
      3,
      {
        ignoreAtRules: ["blockless-at-rules", "pseudo-classes", "media", "print", "supports"],
      },
    ],
    "selector-max-attribute": 2,
    "selector-max-class": 4,
    "selector-max-compound-selectors": 4,
    "selector-max-id": 1,
    ...orderRules,
  },
  overrides: [
    {
      files: ["*.scss", "**/*.scss", "*.vue", "**/*.vue"],
      ...scss,
    },
  ],
};

export default config;
