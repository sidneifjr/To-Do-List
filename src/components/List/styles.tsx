import styled from "styled-components";
import { convertToRem } from "../../helpers/convertToRem";

const ListWrapper = styled.div`
  width: 100%;
  max-width: 736px;
  margin-top: ${convertToRem(64)};
  margin-right: auto;
  margin-left: auto;

  @media (max-width: 960px){
    padding-right: ${convertToRem(20)};
    padding-left: ${convertToRem(20)};
  }
`;

const Lists = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: ${convertToRem(12)};
`;

const ListTopInfo = styled.div`
  margin-bottom: ${convertToRem(24)};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ListTopInfoText = styled.p`
  font-size: ${convertToRem(14)};
  line-height: ${convertToRem(17)};
  font-weight: var(--font-weight-bold);
  color: var(--blue);
`;

const ListTopInfoTextCounter = styled.span`
  height: 19px;
  width: 25px;
  font-size: ${convertToRem(12)};
  line-height: ${convertToRem(15)};
  font-weight: var(--font-weight-bold);
  color: var(--gray-200);
  background: var(--gray-400);
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

export {
  ListWrapper,
  Lists,
  ListTopInfo,
  ListTopInfoText,
  ListTopInfoTextCounter,
};