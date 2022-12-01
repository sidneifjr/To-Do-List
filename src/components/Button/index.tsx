import { ButtonHTMLAttributes } from "react";
import { SubmitButton } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  children?: any;
  className?: string;
}

export const Button = ({ ...props }: ButtonProps) => {
  return <SubmitButton {...props}></SubmitButton>;
};
