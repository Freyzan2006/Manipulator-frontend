import type { SvgIconProps } from "@mui/material";

export type ICommand = {
  name: string;
  description: string;
};

export type MeanColor = {
  name: string;
  description: string;
  icon: React.ComponentType<SvgIconProps>;
  props?: SvgIconProps;
};
