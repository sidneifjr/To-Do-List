import styled from "styled-components";
import { convertToRem } from "../../helpers/convertToRem";

const HeaderWrapper = styled.header`
  background: var(--gray-700);
  padding-top: ${convertToRem(81)};
  padding-bottom: ${convertToRem(81)};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { HeaderWrapper };
