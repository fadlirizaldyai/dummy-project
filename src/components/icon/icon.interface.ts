import { LegacyRef } from "react";

export interface ICommonIconProps {
  id?: string;
  eleRef?: LegacyRef<SVGSVGElement>;
  isActive?: boolean;
  color?: string;
  scale?: number;
  rotate?: number; //deg
  className?: string;
}
