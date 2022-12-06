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
  onDelete?: (itemToDelete: any) => void;
}

interface ListItemsProps {
  id: number;
  text: string;
}

export const List = ({ onDelete, ...props }: ListProps) => {
  const [amountOfTasksCompleted, setAmountOfTasksCompleted] = useState(0);

  // const handleCompletedTasks = () => {
  //   console.log(props.listItens.length);
  //   setAmountOfTasksCompleted(amountOfTasksCompleted+1);
  // }

  const handleDeleteItem = () => {
    console.log("deletar");

    onDelete(ListItems);
  };

  const showListsOrError = () => {
    if (props.listItens) {
      return (
        <Lists>
          {props.listItens.map((item: any) => (
            <ListItems
              key={item.id}
              text={item.text}
              onDelete={handleDeleteItem}
              // onCheck={handleCompletedTasks}
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
