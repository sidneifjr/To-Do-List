import { useState } from "react";
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
  // onDelete?: (itemToDelete: any) => void;
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
    if (props.listItens) {
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
      return <p>Nada será exibido.</p>;
    }
  };

  return (
    <ListWrapper>
      <ListTopInfo>
        <ListTopInfoText>
          Tarefas criadas{" "}
          <ListTopInfoTextCounter>{props.listItens.length}</ListTopInfoTextCounter>
        </ListTopInfoText>

        <ListTopInfoText>
          Concluídas{" "}
          <ListTopInfoTextCounter>{amountOfTasksCompleted}</ListTopInfoTextCounter>
        </ListTopInfoText>
      </ListTopInfo>

      {showListsOrError()}
    </ListWrapper>
  );
};
