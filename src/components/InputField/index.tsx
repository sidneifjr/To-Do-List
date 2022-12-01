import { InputHTMLAttributes } from "react";
import { Input } from "./styles";

interface InputField extends InputHTMLAttributes<HTMLInputElement>{
  onSubmit?: () => {};
}

export const InputField = (props: InputField) => {
  return <Input onSubmit={props.onSubmit} />;
};
