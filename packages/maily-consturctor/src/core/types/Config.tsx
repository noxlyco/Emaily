import { ComponentType } from "./Component";

export type ConfigType = {
  components: Record<string, ComponentType>;
  structure: {
    html?: string;
    json?: Record<string, ComponentType>;
  };
  selectedComponent: ComponentType & { id: string };
};

