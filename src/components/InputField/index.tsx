import { InputHTMLAttributes } from "react";
import { InputWrapper, Input, Error } from "./styles";

interface IInputField extends InputHTMLAttributes<HTMLInputElement>{
  hasError: boolean;
}

export const InputField = ({...props}: IInputField) => {
  return  (
    <InputWrapper>
      {props.hasError ? <Error>Por favor, insira um valor válido.</Error> : ''}
      <Input {...props} />
    </InputWrapper>
  );
};
