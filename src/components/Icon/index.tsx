import { ImgHTMLAttributes } from "react";

interface IIcon extends ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
}

export const Icon = ({ ...props }: IIcon) => {
  return <img {...props} />;
};
