import { useState } from "react";
import { ErrorMessage } from "../ErrorMessage";
import { ListItems } from "./ListItem";

import {
  ListWrapper,
  Lists,
  ListTopInfo,
  ListTopInfoText,
  ListTopInfoTextCounter,
} from "./styles";

interface ListProps {
  listItens: ListItemsProps[];
  text?: string;
  onDelete?: any;
}

interface ListItemsProps {
  id: number;
  text: string;
}

export const List = ({ onDelete, ...props }: ListProps) => {
  // Armazena a quantidade de tarefas, marcadas como "completa".
  let [amountOfTasksCompleted, setAmountOfTasksCompleted] = useState(0);

  const handleCompletedTasks = (e: boolean) => {    
    let isTargetChecked = e;

    if(isTargetChecked === true){
      setAmountOfTasksCompleted(amountOfTasksCompleted + 1);
    }

    else if (isTargetChecked === false){
      setAmountOfTasksCompleted(amountOfTasksCompleted - 1);
    }
  }

  // Imprime as listas, caso existam itens; senão, exibe mensagem informando.
  const showListsOrError = () => {
    /**
     * Verifica se o prop 'listItens' existe.
     * Então, o método 'length' verifica a quantidade de itens no array; caso não existam mais, a mensagem de erro será exibida.
     *  */ 
    if (props.listItens.length) {
      return (
        <Lists>
          {props.listItens.map((listItem) => (
            <ListItems
              key={listItem.id}
              text={listItem.text}
              onDelete={() => onDelete(listItem)}
              onChecked={(el) => handleCompletedTasks(el)}
            />
          ))}
        </Lists>
      );
    }

    else {
      return <ErrorMessage />;
    }
  };

  return (
    <ListWrapper>
      <ListTopInfo>
        <ListTopInfoText>
          Tarefas criadas{" "}
          <ListTopInfoTextCounter>{props.listItens?.length || 0}</ListTopInfoTextCounter>
        </ListTopInfoText>

        <ListTopInfoText style={{color: "#8284FA"}}>
          Concluídas{" "}
          <ListTopInfoTextCounter>{amountOfTasksCompleted}</ListTopInfoTextCounter>
        </ListTopInfoText>
      </ListTopInfo>

      {showListsOrError()}
    </ListWrapper>
  );
};
