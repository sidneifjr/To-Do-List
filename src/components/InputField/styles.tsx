import styled from "styled-components";
import { convertToRem } from "../../helpers/convertToRem";

const InputWrapper = styled.div`
  width: 100%;
  position: relative;
  margin-right: ${convertToRem(8)};
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  font-size: ${convertToRem(16)};
  line-height: ${convertToRem(22.4)};
  font-weight: var(--font-weight-regular);
  color: var(--gray-300);
  background: var(--gray-500);
  border: solid 1px var(--gray-700);
  border-radius: 8px;
  padding-left: ${convertToRem(16)};
  display: block;
  outline: none;

  &:focus-within {
    color: var(--gray-100);
    border: solid 1px var(--purple-dark);
  }
`;

const Error = styled.span`
  font-size: ${convertToRem(16)};
  line-height: ${convertToRem(22.4)};
  font-weight: var(--font-weight-regular);
  color: var(--danger);
  position: absolute;
  top: ${convertToRem(-30)};
  display: block;
`

export { InputWrapper, Input, Error };
