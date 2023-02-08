import styled from "styled-components";
import { convertToRem } from "../../../helpers/convertToRem";

interface ListItemProps {
  text?: string;
}

const ListItem = styled.li<ListItemProps>`
  font-size: ${convertToRem(14)};
  line-height: ${convertToRem(20)};
  background: var(--gray-500);
  color: var(--gray-100);
  border-radius: 8px;
  padding: ${convertToRem(16)};
  position: relative;
  gap: ${convertToRem(12)};
  transition: text-decoration ease-in-out 0.2s, color ease-in-out 0.2s;
  display: flex;
  justify-content: space-between;
  animation: fadeIn;
  animation-timing-function: ease-in-out;
  animation-duration: 0.5s;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  input[type="checkbox"] {
    width: 24px;
    height: 24px;
    position: absolute;
    left: ${convertToRem(20)};
  }

  &.active {
    text-decoration-line: line-through;
    color: var(--gray-300);
  }
`;

const DeleteButton = styled.button`
  height: 24px;
  min-width: 24px; // impede que o botão diminua, em relação ao texto.
  background: transparent;
  display: flex;
  align-items: flex-start;

  &:hover {
    background: var(--gray-400);
  }
`;

export { ListItem, DeleteButton };