import { Config } from "stylelint";

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
        // wechat miniprogram
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
      [
        "content",
        {
          groupName: "position",
          emptyLineBefore: "threshold",
          noEmptyLineBetween: true,
          properties: [
            "position",
            "inset",
            "inset-block",
            "inset-inline",
            "top",
            "right",
            "bottom",
            "left",
            "inset-block-start",
            "inset-block-end",
            "inset-inline-start",
            "inset-inline-end",
            "z-index",
          ],
        },
        {
          groupName: "display",
          emptyLineBefore: "threshold",
          noEmptyLineBetween: true,
          properties: [
            "display",
            "vertical-align",
            "flex",
            "flex-grow",
            "flex-shrink",
            "flex-basis",
            "flex-direction",
            "flex-flow",
            "flex-wrap",
            "grid",
            "grid-area",
            "grid-template",
            "grid-template-areas",
            "grid-template-rows",
            "grid-template-columns",
            "grid-row",
            "grid-row-start",
            "grid-row-end",
            "grid-column",
            "grid-column-start",
            "grid-column-end",
            "grid-auto-rows",
            "grid-auto-columns",
            "grid-auto-flow",
            "grid-gap",
            "grid-row-gap",
            "grid-column-gap",
            "gap",
            "row-gap",
            "column-gap",
            "align-content",
            "align-items",
            "align-self",
            "justify-content",
            "justify-items",
            "justify-self",
            "place-content",
            "order",
            "float",
            "clear",
          ],
        },
        {
          groupName: "size",
          emptyLineBefore: "threshold",
          noEmptyLineBetween: true,
          properties: [
            "object-fit",
            "overflow",
            "overflow-x",
            "overflow-y",
            "overflow-scrolling",
            "clip",
            "box-sizing",
          ],
        },
        {
          groupName: "box-modal",
          emptyLineBefore: "threshold",
          noEmptyLineBetween: true,
          properties: [
            "width",
            "min-width",
            "max-width",
            "height",
            "min-height",
            "max-height",
            "margin",
            "margin-block",
            "margin-inline",
            "margin-top",
            "margin-right",
            "margin-bottom",
            "margin-left",
            "margin-block-start",
            "margin-block-end",
            "margin-inline-start",
            "margin-inline-end",
            "padding",
            "padding-block",
            "padding-inline",
            "padding-top",
            "padding-right",
            "padding-bottom",
            "padding-left",
            "padding-block-start",
            "padding-block-end",
            "padding-inline-start",
            "padding-inline-end",
            "border",
            "border-spacing",
            "border-collapse",
            "border-width",
            "border-style",
            "border-color",
            "border-inline",
            "border-inline-width",
            "border-inline-style",
            "border-inline-color",
            "border-top",
            "border-top-width",
            "border-top-style",
            "border-top-color",
            "border-right",
            "border-right-width",
            "border-right-style",
            "border-right-color",
            "border-bottom",
            "border-bottom-width",
            "border-bottom-style",
            "border-bottom-color",
            "border-left",
            "border-left-width",
            "border-left-style",
            "border-left-color",
            "border-inline-start",
            "border-inline-start-width",
            "border-inline-start-style",
            "border-inline-start-color",
            "border-inline-end",
            "border-inline-end-width",
            "border-inline-end-style",
            "border-inline-end-color",
            "border-radius",
            "border-top-left-radius",
            "border-top-right-radius",
            "border-bottom-right-radius",
            "border-bottom-left-radius",
            "border-image",
            "border-image-source",
            "border-image-slice",
            "border-image-width",
            "border-image-outset",
            "border-image-repeat",
            "border-top-image",
            "border-right-image",
            "border-bottom-image",
            "border-left-image",
            "border-corner-image",
            "border-top-left-image",
            "border-top-right-image",
            "border-bottom-right-image",
            "border-bottom-left-image",
          ],
        },
        {
          groupName: "style",
          emptyLineBefore: "threshold",
          noEmptyLineBetween: true,
          properties: [
            "background",
            "background-color",
            "background-image",
            "background-attachment",
            "background-position",
            "background-position-x",
            "background-position-y",
            "background-clip",
            "background-origin",
            "background-size",
            "background-repeat",
            "color",
            "box-decoration-break",
            "box-shadow",
            "outline",
            "outline-width",
            "outline-style",
            "outline-color",
            "outline-offset",
            "table-layout",
            "caption-side",
            "empty-cells",
            "list-style",
            "list-style-position",
            "list-style-type",
            "list-style-image",
          ],
        },
        {
          groupName: "text",
          emptyLineBefore: "threshold",
          noEmptyLineBetween: true,
          properties: [
            "font",
            "font-weight",
            "font-style",
            "font-variant",
            "font-size-adjust",
            "font-stretch",
            "font-size",
            "font-family",
            "src",
            "line-height",
            "letter-spacing",
            "quotes",
            "counter-increment",
            "counter-reset",
            "-ms-writing-mode",
            "text-align",
            "text-align-last",
            "text-decoration",
            "text-emphasis",
            "text-emphasis-position",
            "text-emphasis-style",
            "text-emphasis-color",
            "text-indent",
            "text-justify",
            "text-outline",
            "text-transform",
            "text-wrap",
            "text-overflow",
            "text-overflow-ellipsis",
            "text-overflow-mode",
            "text-shadow",
            "white-space",
            "word-spacing",
            "word-wrap",
            "word-break",
            "overflow-wrap",
            "tab-size",
            "hyphens",
            "interpolation-mode",
          ],
        },
        {
          groupName: "others",
          emptyLineBefore: "threshold",
          noEmptyLineBetween: true,
          properties: [
            "opacity",
            "visibility",
            "filter",
            "resize",
            "cursor",
            "pointer-events",
            "user-select",
            "unicode-bidi",
            "direction",
            "columns",
            "column-span",
            "column-width",
            "column-count",
            "column-fill",
            "column-gap",
            "column-rule",
            "column-rule-width",
            "column-rule-style",
            "column-rule-color",
            "break-before",
            "break-inside",
            "break-after",
            "page-break-before",
            "page-break-inside",
            "page-break-after",
            "orphans",
            "widows",
            "zoom",
            "max-zoom",
            "min-zoom",
            "user-zoom",
            "orientation",
            "fill",
            "stroke",
          ],
        },
        {
          groupName: "transition",
          emptyLineBefore: "threshold",
          noEmptyLineBetween: true,
          properties: [
            "transition",
            "transition-delay",
            "transition-timing-function",
            "transition-duration",
            "transition-property",
            "transform",
            "transform-origin",
            "animation",
            "animation-name",
            "animation-duration",
            "animation-play-state",
            "animation-timing-function",
            "animation-delay",
            "animation-iteration-count",
            "animation-direction",
            "animation-fill-mode",
          ],
        },
      ],
      {
        unspecified: "bottomAlphabetical",
        emptyLineBeforeUnspecified: "threshold",
        emptyLineMinimumPropertyThreshold: 5,
        severity: "warning",
      },
    ],
    "scss/at-import-partial-extension-blacklist": ["scss"],
    "scss/selector-no-redundant-nesting-selector": true,
  },
};

export default config;
