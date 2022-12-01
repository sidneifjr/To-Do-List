import {
  ListWrapper,
  Lists,
  ListTopInfo,
  ListTopInfoText,
  ListTopInfoTextCounter,
} from "./styles";

import { ListItems } from "./ListItem";
import { useState } from "react";

interface ListProps {
  listItens: ListItemsProps[];
}

interface ListItemsProps {
  id: number;
  text: string;
}

export const List = ({ ...props }: ListProps) => {
  const [lists, setLists] = useState(['']);

  // const handleDelete = (listToDelete: ListItemsProps) => {
  //   const listsWithoutDeletedOne = props.listItens.filter(listItem => {
  //     return listItem !== listToDelete;
  //   });

  //   setLists(listsWithoutDeletedOne);
  // }

  return (
    <ListWrapper>
      <ListTopInfo>
        <ListTopInfoText>
          Tarefas criadas <ListTopInfoTextCounter>0</ListTopInfoTextCounter>
        </ListTopInfoText>

        <ListTopInfoText>
          Concluídas <ListTopInfoTextCounter>0</ListTopInfoTextCounter>
        </ListTopInfoText>
      </ListTopInfo>

      <Lists>
        {props.listItens.map((listItem: any) => (
          <ListItems
            key={listItem.id}
            text={listItem.text}
            // onDelete={() => deleteHandle}
          />
        ))}
      </Lists>
    </ListWrapper>
  );
};
