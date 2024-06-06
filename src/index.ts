import { Config } from "stylelint";
import { propertiesOrderConfig } from "./order.js";

const config: Config = {
  extends: ["stylelint-config-standard-scss"],
  plugins: ["stylelint-order"],
  rules: {
    "at-rule-disallowed-list": ["debug"],
    "at-rule-no-vendor-prefix": true,
    "color-hex-alpha": "never",
    "color-hex-length": "short",
    "color-named": "never",
    "declaration-block-single-line-max-declarations": 1,
    "declaration-empty-line-before": null,
    "function-url-quotes": "always",
    "length-zero-no-unit": true,
    "max-nesting-depth": [
      3,
      {
        ignoreAtRules: [
          "each",
          "media",
          "supports",
          "include",
          "pseudo-classes",
        ],
      },
    ],
    "media-feature-name-no-vendor-prefix": true,
    "property-no-vendor-prefix": null,
    "rule-empty-line-before": [
      "always-multi-line",
      {
        except: ["first-nested"],
        ignore: ["after-comment"],
      },
    ],
    "selector-class-pattern": [
      "^[a-z0-9\\-]+$",
      {
        message:
          "Selector should be written in lowercase with hyphens (selector-class-pattern)",
      },
    ],
    "selector-max-compound-selectors": 4,
    "selector-max-id": 1,
    "selector-no-vendor-prefix": true,
    "selector-pseudo-element-colon-notation": "double",
    "selector-pseudo-element-no-unknown": true,
    "shorthand-property-no-redundant-values": true,
    "unit-no-unknown": [
      true,
      {
        // for wechat miniprogram
        ignoreUnits: ["rpx"],
      },
    ],
    "value-no-vendor-prefix": true,
    "order/order": [
      [
        {
          type: "at-rule",
          name: "use",
        },
        {
          type: "at-rule",
          name: "forward",
        },
        {
          type: "at-rule",
          name: "import",
        },
        "dollar-variables",
        "custom-properties",
        "at-rules",
        {
          type: "at-rule",
          name: "include",
        },
        "declarations",
        {
          type: "at-rule",
          name: "supports",
        },
        {
          type: "at-rule",
          name: "media",
        },
        {
          type: "at-rule",
          selector: "^(?:if|else if|else|for|each)",
        },
        "rules",
        {
          type: "at-rule",
          name: "each",
        },
      ],
      {
        unspecified: "ignore",
        severity: "warning",
      },
    ],
    "order/properties-order": [
      propertiesOrderConfig,
      {
        unspecified: "bottomAlphabetical",
        emptyLineBeforeUnspecified: "threshold",
        emptyLineMinimumPropertyThreshold: 5,
        severity: "warning",
      },
    ],
    "scss/at-import-partial-extension-disallowed-list": ["scss"],
    "scss/selector-no-redundant-nesting-selector": true,
  },
};

export default config;
