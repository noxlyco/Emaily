import { ReactNode } from "react";

type ViewportType = {
  width: number;
  height?: number | "auto";
  label?: string;
  icon?: string | ReactNode
}

export type UiType = {
  isHeaderVisible?: boolean;
  isLeftSidebarVisible?: boolean;
  isRightSidebarVisible?: boolean;
  isFooterVisible?: boolean;

  viewports?: {
    current?: {
      width?: number,
      height?: number | "auto"
    };
    controlsVisible?: boolean;
    options?: ViewportType[];
  }
}