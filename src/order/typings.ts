export type OrderKeyword =
  | "custom-properties"
  | "dollar-variables"
  | "at-variables"
  | "declarations"
  | "rules"
  | "at-rules"
  | "less-mixins";

export type OrderRuleConfig = {
  type: "rule";
  selector?: string | RegExp;
  name?: string;
};

export type OrderAtRuleConfig = {
  type: "at-rule";
  name?: string;
  parameter?: string | RegExp;
  hasBlock?: boolean;
};

export type OrderOptions = (
  | OrderKeyword
  | OrderAtRuleConfig
  | OrderRuleConfig
)[];

export type PropertiesOrderGroupConfig = {
  properties: string[];
  emptyLineBefore?: "always" | "never" | "threshold";
  noEmptyLineBetween?: boolean;
  groupName?: string;
  order?: "flexible";
};

export type PropertiesOrderConfig = string | PropertiesOrderGroupConfig;

export type PropertiesOrderOptions = PropertiesOrderConfig[];
