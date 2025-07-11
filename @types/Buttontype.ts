import { ReactNode } from "react";

export interface ButtonType {
  icon?: ReactNode;
  type: "submit" | "button";
  iconPOsition?: "left" | "right";
  title: string;
  extraClass?: string;
  variant: "filled" | "outlined";
}
