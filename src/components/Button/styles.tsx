import styled from "styled-components";
import { convertToRem } from "../../helpers/convertToRem";

const ButtonItem = styled.button`
  background-color: transparent;
  display: flex;
`;

const SubmitButton = styled.button`
  width: 100%;
  max-width: 90px;
  height: 52px;
  font-family: var(--font);
  font-size: ${convertToRem(14)};
  line-height: ${convertToRem(19.6)};
  font-weight: bold;
  color: var(--white);
  background-color: var(--blue-dark);
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background ease-in-out 0.2s;

  &:hover {
    background: var(--blue);
  }
`;

export { ButtonItem, SubmitButton };
