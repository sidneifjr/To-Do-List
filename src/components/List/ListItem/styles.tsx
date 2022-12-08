import styled from "styled-components";
import { convertToRem } from "../../../helpers/convertToRem";

interface ListItemProps {
  text?: string;
}

export const ListItem = styled.li<ListItemProps>`
  font-size: ${convertToRem(14)};
  line-height: ${convertToRem(20)};
  background: var(--gray-500);
  color: var(--gray-100);
  border-radius: 8px;
  padding: 16px 16px 16px 52px;
  position: relative;
  gap: 12px;
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
    left: 20px;
  }

  &.active {
    text-decoration-line: line-through;
    color: var(--gray-300);
  }
`;