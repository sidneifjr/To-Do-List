import { LiHTMLAttributes, useState } from "react";
import { Icon } from "../../Icon";
import { DeleteButton, ListItem } from "./styles";

import trashIcon from "../../../assets/trash.svg";

interface IListItems extends LiHTMLAttributes<HTMLUListElement> {
  text?: string;
  onClick?: () => void;
  onChecked: (e: any) => void;
  onDelete: () => void;
}

export const ListItems = ({ ...props }: IListItems) => {
  // Armazena o estado do checkbox: marcado ou não.
  const [checkboxChecked, setCheckboxChecked] = useState(false);

  const checkHandler = (e: { target: any; }) => {
    let checkbox = e.target;
    let isChecked = checkbox.checked;
    setCheckboxChecked(isChecked);

    // Quando o item clicado estiver marcado.
    props.onChecked(isChecked);
  };

  return (
    <ListItem className={checkboxChecked ? "active" : ""} key={props.id}>
      <input type="checkbox" onClick={checkHandler} />
      {props.text}

      <DeleteButton onClick={props.onDelete}>
        <Icon src={trashIcon} alt="Trash Icon"></Icon>
      </DeleteButton>
    </ListItem>
  );
};
