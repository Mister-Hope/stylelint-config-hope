import { Config } from "stylelint";

type PropertyOrderGroupConfig = {
  properties: string[];
  emptyLineBefore?: "always" | "never" | "threshold";
  noEmptyLineBetween?: boolean;
  groupName?: string;
  order?: "flexible";
};

type PropertyOrderConfig = string | PropertyOrderGroupConfig;

type PropertyOrderPrimaryConfig = (string | PropertyOrderConfig)[];

const getLogicalShortHandDirections = (prefix: string): string[] => [
  `${prefix}-block`,
  `${prefix}-inline`,
];

const getLogicalDirections = (prefix: string, shortHand = true): string[] => [
  ...(shortHand ? getLogicalShortHandDirections(prefix) : []),
  `${prefix}-block-start`,
  `${prefix}-block-end`,
  `${prefix}-inline-start`,
  `${prefix}-inline-end`,
];

const getWritingModeDirections = (prefix: string): string[] => [
  prefix,
  `${prefix}-block`,
  `${prefix}-inline`,
  `${prefix}-x`,
  `${prefix}-y`,
];

const getBorderProperties = (prefix: string): string[] => [
  prefix,
  `${prefix}-width`,
  `${prefix}-style`,
  `${prefix}-color`,
];

const getAllDirections = (prefix: string): string[] => [
  prefix,
  ...getLogicalShortHandDirections(prefix),
  `${prefix}-top`,
  `${prefix}-right`,
  `${prefix}-bottom`,
  `${prefix}-left`,
  ...getLogicalDirections(prefix, false),
];

const getMinMax = (prefix: string): string[] => [
  prefix,
  `min-${prefix}`,
  `max-${prefix}`,
];

const getAlign = (prefix: string): string[] => [
  `${prefix}-content`,
  `${prefix}-items`,
  `${prefix}-self`,
];

export const propertiesOrderConfig: PropertyOrderPrimaryConfig = [
  "all",
  "content",
  "counter-increment",
  "counter-reset",
  "counter-set",
  {
    groupName: "position",
    emptyLineBefore: "threshold",
    noEmptyLineBetween: true,
    properties: [
      "position",
      "inset",
      ...getLogicalDirections("inset"),
      "top",
      "right",
      "bottom",
      "left",
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
      "flex-flow",
      "flex-grow",
      "flex-shrink",
      "flex-basis",
      "flex-direction",
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
      ...getAlign("place"),
      ...getAlign("align"),
      /** @experimental */
      "align-tracks",
      ...getAlign("justify"),
      /** @experimental */
      "justify-tracks",
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
      "object-position",
      ...getWritingModeDirections("overflow"),
      "overflow-clip-margin",
      "overflow-anchor",
      "clip-path",
      /** @deprecated */
      "clip",
      "resize",
    ],
  },
  {
    groupName: "box-modal",
    emptyLineBefore: "threshold",
    noEmptyLineBetween: true,
    properties: [
      "contain",
      /** @experimental */
      "content-visibility",
      "contain-intrinsic-block-size",
      "contain-intrinsic-inline-size",
      "contain-intrinsic-size",
      "contain-intrinsic-width",
      "contain-intrinsic-height",
      "container",
      "container-name",
      "container-type",

      "box-sizing",

      ...getMinMax("block-size"),
      ...getMinMax("inline-size"),
      ...getMinMax("width"),
      ...getMinMax("height"),

      "aspect-ratio",

      ...getAllDirections("margin"),
      /** @experimental */
      "margin-trim",
      ...getAllDirections("padding"),

      "border",
      "border-spacing",
      "border-collapse",
      ...getAllDirections("border")
        .flatMap(getBorderProperties)
        // remove border
        .slice(1),

      "border-radius",
      "border-start-start-radius",
      "border-start-end-radius",
      "border-end-start-radius",
      "border-end-end-radius",
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

      ...getBorderProperties("outline"),
      "outline-offset",

      // table
      "table-layout",
      "caption-side",
      "empty-cells",

      // list
      "list-style",
      "list-style-position",
      "list-style-image",
      "list-style-type",

      // form
      "field-sizing",
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
      "font-size",
      "font-size-adjust",
      "font-family",
      "font-kerning",
      "font-variant",

      "font-variant-alternates",
      "font-variant-caps",
      "font-variant-east-asian",
      "font-variant-emoji",
      "font-variant-ligatures",
      "font-variant-numeric",
      "font-variant-position",

      "font-stretch",
      "font-synthesis",
      "font-synthesis-position",
      "font-synthesis-style",
      "font-synthesis-weight",
      "font-synthesis-small-caps",
      "font-feature-settings",

      "font-optical-sizing",
      "font-language-override",
      "font-palette",

      "src",
      "line-height",
      "line-height-spacing",
      "letter-spacing",
      "quotes",

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

      "writing-mode",
      "direction",
      "text-orientation",
      "text-combine-upright",

      "line-break",
      "white-space",
      "white-space-collapse",
      "word-spacing",
      "word-wrap",
      "word-break",
      "overflow-wrap",

      /** @experimental */
      "initial-letter",
      /** @experimental */
      "initial-letter-align",

      "ruby-position",
      /** @experimental */
      "ruby-align",
      "tab-size",
      "hyphens",
      "hyphenate-character",
      "hyphenate-limit-chars",
      "hanging-punctuation",
      "unicode-bidi",

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

      "mask",
      "mask-image",
      "mask-position",
      "mask-size",
      "mask-repeat",
      "mask-origin",
      "mask-clip",
      "mask-composite",
      "mask-mode",
      "mask-type",
      "mask-border",
      "mask-border-mode",
      "mask-border-outset",
      "mask-border-repeat",
      "mask-border-slice",
      "mask-border-source",
      "mask-border-width",

      // mixing
      "filter",
      "backdrop-filter",
      "mix-blend-mode",
      "background-blend-mode",

      // cursor
      "cursor",
      "caret-color",
      "pointer-events",
      "user-select",
      "touch-action",

      // columns
      "columns",
      "column-width",
      "column-count",
      "column-span",
      "column-fill",
      "column-gap",
      ...getBorderProperties("column-rule"),

      // image
      "image-orientation",
      "image-rendering",
      /** @experimental */
      "image-resolution",

      // math
      "math-style",
      "math-depth",
      /** @experimental */
      "math-shift",

      // print
      "break-before",
      "break-inside",
      "break-after",
      "page",
      /** @deprecated */
      "page-break-before",
      /** @deprecated */
      "page-break-inside",
      /** @deprecated */
      "page-break-after",
      "orphans",
      "widows",
      "print-color-adjust",

      // scroll
      "scroll-behavior",
      ...getAllDirections("scroll-margin"),
      ...getAllDirections("scroll-padding"),
      "scroll-snap-type",
      "scroll-snap-align",
      "scroll-snap-stop",
      "scroll-timeline",
      ...getWritingModeDirections("overscroll-behavior"),

      // render
      "isolation",
      "backface-visibility",
      "forced-color-adjust",
      "paint-order",
      "will-change",
    ],
  },
  {
    groupName: "appearance",
    emptyLineBefore: "threshold",
    noEmptyLineBetween: true,
    properties: ["appearance", "accent-color"],
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
      "transition-behavior",
      "overlay",
      "view-transition-name",
    ],
  },
  {
    groupName: "transforms",
    emptyLineBefore: "threshold",
    noEmptyLineBetween: true,
    properties: [
      "transform",
      "transform-origin",
      "transform-box",
      "transform-style",
      "perspective",
      "perspective-origin",
      "translate",
      "scale",
      "rotate",
      "zoom",
    ],
  },
  {
    groupName: "animation",
    emptyLineBefore: "threshold",
    noEmptyLineBetween: true,
    properties: [
      "animation",
      "animation-name",
      "animation-duration",
      "animation-timing-function",
      "animation-delay",
      "animation-direction",
      "animation-iteration-count",
      "animation-fill-mode",
      "animation-play-state",
      /** @experimental */
      "animation-timeline",
      "animation-composition",
      /** @experimental */
      "animation-range",
      /** @experimental */
      "animation-range-start",
      /** @experimental */
      "animation-range-end",
      /** @experimental */
      "scroll-timeline",
      /** @experimental */
      "scroll-timeline-name",
      /** @experimental */
      "scroll-timeline-axis",
      /** @experimental */
      "view-timeline",
      /** @experimental */
      "view-timeline-name",
      /** @experimental */
      "view-timeline-axis",
      /** @experimental */
      "view-timeline-inset",
      /** @experimental */
      "timeline-scope",
      "offset",
      "offset-position",
      "offset-path",
      "offset-distance",
      "offset-rotate",
      "offset-anchor",
    ],
  },
  {
    groupName: "svg",
    emptyLineBefore: "threshold",
    noEmptyLineBetween: true,
    properties: [
      "accumulate",
      "additive",
      "alignment-baseline",
      "amplitude",

      "attributeName",
      "azimuth",
      "baseFrequency",
      "baseline-shift",
      "begin",
      "bias",
      "by",
      "calcMode",
      "clip-rule",
      "clipPathUnits",
      "color-interpolation",
      "color-interpolation-filters",
      "cx",
      "cy",
      "d",
      "decoding",
      "diffuseConstant",
      "divisor",
      "dominant-baseline",
      "dur",
      "dx",
      "dy",
      "edgeMode",
      "elevation",
      "end",
      "exponent",
      "fill",
      "fill-opacity",
      "fill-rule",
      "filterUnits",
      "flood-color",
      "flood-opacity",
      "fr",
      "from",
      "fx",
      "fy",
      "gradientTransform",
      "gradientUnits",
      "image-rendering",
      "in",
      "in2",
      "intercept",
      "k1",
      "k2",
      "k3",
      "k4",
      "kernelMatrix",
      "kernelUnitLength",
      "kerningDeprecated",
      "keyPoints",
      "keySplines",
      "keyTimes",
      "lang",
      "lengthAdjust",
      "lighting-color",
      "limitingConeAngle",
      "marker-end",
      "marker-mid",
      "marker-start",
      "markerHeight",
      "markerUnits",
      "markerWidth",
      "maskContentUnits",
      "maskUnits",
      "max",
      "media",
      /** @experimental */
      "method",
      "min",
      "mode",
      "numOctaves",
      "operator",
      "orient",
      "origin",
      "overline-position",
      "overline-thickness",
      "path",
      "pathLength",
      "patternContentUnits",
      "patternTransform",
      "patternUnits",
      "points",
      "pointsAtX",
      "pointsAtY",
      "pointsAtZ",
      "preserveAlpha",
      "preserveAspectRatio",
      "primitiveUnits",
      "r",
      "radius",
      "refX",
      "refY",
      "repeatCount",
      "repeatDur",
      "restart",
      "result",
      "rx",
      "ry",
      "seed",
      "shape-rendering",
      /** @experimental */
      "side",
      "spacing",
      "specularConstant",
      "specularExponent",
      "spreadMethod",
      "startOffset",
      "stdDeviation",
      "stitchTiles",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "surfaceScale",
      "systemLanguage",
      "tableValues",
      "text-anchor",
      "text-rendering",
      "textLength",
      "to",
      "type",
      "underline-position",
      "underline-thickness",
      "values",
      "vector-effect",
      "viewBox",
      "x",
      "x1",
      "x2",
      "xChannelSelector",
      "y",
      "y1",
      "y2",
      "yChannelSelector",
      "z",
    ],
  },
];

const orderConfig: Config = {
  plugins: ["stylelint-order"],
  rules: {
    "order/order": [
      [
        "custom-properties",
        "at-rules",
        "declarations",
        {
          type: "at-rule",
          name: "supports",
        },
        {
          type: "at-rule",
          name: "media",
        },
        "rules",
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
  },
};

export default orderConfig;
