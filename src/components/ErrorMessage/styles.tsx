import styled from "styled-components";
import { convertToRem } from "../../helpers/convertToRem";

const ErrorWrapper = styled.div`
  border-top: solid 1px var(--gray-400);
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  padding-top: ${convertToRem(64)};
  padding-right: ${convertToRem(24)};
  padding-bottom: ${convertToRem(64)};
  padding-left: ${convertToRem(24)};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ErrorTitle = styled.strong`
  width: 100%;
  font-size: ${convertToRem(16)};
  line-height: ${convertToRem(22.4)};
  font-weight: bold;
  color: var(--gray-300);
  text-align: center;
  margin-top: ${convertToRem(16)};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ErrorDescription = styled.p`
  width: 100%;
  font-size: ${convertToRem(16)};
  line-height: ${convertToRem(22.4)};
  font-weight: 400;
  text-align: center;
  color: var(--gray-300);
`;

export { ErrorWrapper, ErrorTitle, ErrorDescription };
