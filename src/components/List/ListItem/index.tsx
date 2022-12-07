import React, { LiHTMLAttributes, useState } from "react";
import { Icon } from "../../Icon";
import { ListItem } from "./styles";

import trashIcon from "../../../assets/trash.svg";

interface ListItemsProps extends LiHTMLAttributes<HTMLUListElement> {
  text?: string;
  onDelete?: () => void;
  onClick: (e: any) => void;
}

export const ListItems = ({ ...props }: ListItemsProps) => {
  const [checkboxChecked, setCheckboxChecked] = useState(false);

  const checkHandler = ({ target }: React.MouseEvent<HTMLInputElement>) => {
    let isTargetChecked = target.checked;
    setCheckboxChecked(isTargetChecked);

    /**
     * Eu preciso encontrar uma forma de, ao clicar no item desejado, incrementar o contador de concluídas em 1.
     * Então, se eu desmarcar o mesmo item, irá reduzir o contador de concluídas em 1.
     * 
     * Como posso fazer isso?
     * 
     * 1) Armazenar a referência do item anterior e comparar com o novo?
     * 2) Quando o checked for true, o contador incrementa por 1; quando for false, decrementar por 1?
     */

    // Quando o item clicado estiver marcado.
    if(isTargetChecked === true){
      props.onClick(target);

      console.log(isTargetChecked);
      console.log("counter increases!");
    }

    else {
      console.log("counter decreases!");
    }
  };

  return (
    <ListItem className={checkboxChecked ? "active" : ""} key={props.id}>
      <input type="checkbox" onClick={checkHandler} />
      {props.text}

      <a href="#" onClick={props.onDelete}>
        <Icon src={trashIcon} alt="Trash Icon"></Icon>
      </a>
    </ListItem>
  );
};
