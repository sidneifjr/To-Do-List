import styled from "styled-components";
import { convertToRem } from "../../helpers/convertToRem";

const Form = styled.form`
  max-width: 736px;
  margin-top: ${convertToRem(25)};
  margin-right: auto;
  margin-left: auto;
  display: flex;
`;

export { Form };
