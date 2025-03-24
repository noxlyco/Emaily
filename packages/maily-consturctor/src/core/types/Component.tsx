import { FieldType } from "./Fields";

export type ComponentType = {
  render: () => string;
  fields?: Record<string, FieldType>;
};

