import { useEffect, useState } from "react";
import { ErrorMessage } from "../ErrorMessage";
import { ListItems } from "./ListItem";

import {
  ListWrapper,
  Lists,
  ListTopInfo,
  ListTopInfoText,
  ListTopInfoTextCounter,
} from "./styles";

interface IList {
  listItens: IListItems[];
  text?: string;
  onDelete?: any;
}

interface IListItems {
  id: number;
  text: string;
}

export const List = ({ onDelete, ...props }: IList) => {
  // Eu preciso salvar quais as tasks atuais em um state, para que eu possa então adicionar ou removê-las.
  // let [tasks, setTasks] = useState();
  // Armazena a quantidade de tarefas, marcadas como "completa".
  let [amountOfTasksCompleted, setAmountOfTasksCompleted] = useState<number>(0);

  useEffect(() => {
    console.log('number of itens on the list should update!');
    console.log(props.listItens?.length);
  }, [amountOfTasksCompleted])

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
        <Lists data-cy="lists">
          {props.listItens.map((listItem) => (
            <ListItems
              key={listItem.id}
              text={listItem.text}
              // Eu preciso atualizar meu state, removendo o item no qual eu cliquei para deletar! 
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
          Tarefas criadas
          <ListTopInfoTextCounter>{props.listItens?.length || 0}</ListTopInfoTextCounter>
        </ListTopInfoText>

        <ListTopInfoText style={{color: "#8284FA"}}>
          Concluídas
          <ListTopInfoTextCounter style={{minWidth: "52px"}}>{amountOfTasksCompleted} de {props.listItens?.length || 0}</ListTopInfoTextCounter>
        </ListTopInfoText>
      </ListTopInfo>

      {showListsOrError()}
    </ListWrapper>
  );
};
