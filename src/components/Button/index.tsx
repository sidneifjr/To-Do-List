import { ButtonHTMLAttributes } from "react";
import { SubmitButton } from "./styles";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  children?: any;
  className?: string;
}

export const Button = ({ ...props }: IButton) => {
  return <SubmitButton {...props} data-cy="submit"></SubmitButton>;
};
