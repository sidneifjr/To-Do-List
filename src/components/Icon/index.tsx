import { ImgHTMLAttributes } from "react";

interface IconProps extends ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
}

export const Icon = ({ ...props }: IconProps) => {
  return <img {...props} />;
};
