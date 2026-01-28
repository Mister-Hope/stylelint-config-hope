export const scss = {
  extends: ["stylelint-config-standard-scss"],
  rules: {
    // Add warning for @debug usage
    "at-rule-disallowed-list": ["debug"],
    // sass @include may require & { } after it
    "block-no-redundant-nested-style-rules": null,
    // disable empty line before declaration to support sass at rules
    "declaration-empty-line-before": null,
    // add sass flow control
    "max-nesting-depth": [
      3,
      {
        ignoreAtRules: [
          "blockless-at-rules",
          "pseudo-classes",
          "media",
          "print",
          "supports",

          // Sass flow control
          "if",
          "else if",
          "include",
          "each",
          "for",
        ],
      },
    ],

    // See https://github.com/stylelint/stylelint/issues/7893
    // Should be disabled once mixed-declaration is not warned
    "no-duplicate-selectors": null,

    // Adds support for at rule in sass:
    // - module: @use @forward @import @include
    // - flow: @if @else @else if @for @each
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
          type: "rule",
          selector: "^&$",
        },
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

    // force omitting .scss extension
    "scss/at-import-partial-extension-disallowed-list": ["scss"],
    // disable redundant nesting selector
    "scss/selector-no-redundant-nesting-selector": true,
  },
};
