import { InputHTMLAttributes } from "react";
import { Input } from "./styles";

interface InputField extends InputHTMLAttributes<HTMLInputElement>{}

export const InputField = (props: InputField) => {
  return <Input {...props} />;
};
