import { Icon } from "../Icon";
import { ErrorWrapper, ErrorDescription, ErrorTitle } from "./styles";

import document from '../../assets/document.svg';

export const ErrorMessage = () => {
  return (
    <ErrorWrapper>
      <Icon src={document} width="56px" height="56px" alt="document"></Icon>
      <ErrorTitle>Você ainda não tem tarefas cadastradas</ErrorTitle>
      <ErrorDescription>Crie tarefas e organize seus itens a fazer</ErrorDescription>
    </ErrorWrapper>
  );
};
