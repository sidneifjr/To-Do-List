import styled from "styled-components";
import { convertToRem } from "../../helpers/convertToRem";

const Input = styled.input`
  width: 100%;
  max-width: 638px;
  font-size: ${convertToRem(16)};
  line-height: ${convertToRem(22.4)};
  font-weight: 400;
  color: var(--gray-300);
  background: var(--gray-500);
  border: solid 1px var(--gray-700);
  border-radius: 8px;
  padding-left: ${convertToRem(16)};
  margin-right: 8px;
  display: block;
  outline: none;

  &:focus-within {
    color: var(--gray-100);
    border: solid 1px var(--purple-dark);
  }
`;

export { Input };
