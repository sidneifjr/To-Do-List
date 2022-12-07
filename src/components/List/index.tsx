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
  const [amountOfTasksCompleted, setAmountOfTasksCompleted] = useState(0);

  const handleCompletedTasks = (target: { checked: boolean; }) => {
    let isMyTargetChecked = target.checked;

    if(isMyTargetChecked === true){
      setAmountOfTasksCompleted(amountOfTasksCompleted+1);
    }

    else if (isMyTargetChecked === false){
      setAmountOfTasksCompleted(amountOfTasksCompleted-1);
    }
  }

  const showListsOrError = () => {
    if (props.listItens) {
      return (
        <Lists>
          {props.listItens.map((listItem: any) => (
            <ListItems
              key={listItem.id}
              text={listItem.text}
              onDelete={() => onDelete(listItem)}
              onClick={(e) => handleCompletedTasks(e)}
            />
          ))}
        </Lists>
      );
    } else {
      return <p>Nada será exibido.</p>;
    }
  };

  return (
    <ListWrapper>
      <ListTopInfo>
        <ListTopInfoText>
          Tarefas criadas{" "}
          <ListTopInfoTextCounter>
            {props.listItens.length}
          </ListTopInfoTextCounter>
        </ListTopInfoText>

        <ListTopInfoText>
          Concluídas{" "}
          <ListTopInfoTextCounter>
            {amountOfTasksCompleted}
          </ListTopInfoTextCounter>
        </ListTopInfoText>
      </ListTopInfo>

      {showListsOrError()}
    </ListWrapper>
  );
};
