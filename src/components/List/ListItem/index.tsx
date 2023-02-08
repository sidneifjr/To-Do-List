import { LiHTMLAttributes, useState } from "react";
import { Icon } from "../../Icon";
import { DeleteButton, ListItem } from "./styles";

// import Check from "../../Checkbox";

import trashIcon from "../../../assets/trash.svg";

interface IListItems extends LiHTMLAttributes<HTMLUListElement> {
  text?: string;
  onClick?: () => void;
  onChecked: (e: any) => void;
  onDelete: (e: any) => void;
}

export const ListItems = ({ ...props }: IListItems) => {
  // Armazena o estado do checkbox: marcado ou não.
  const [checkboxChecked, setCheckboxChecked] = useState<boolean>(false);

  const checkHandler = (e: { target: any; }) => {
    let checkbox = e.target;
    let isChecked = checkbox.checked;
    setCheckboxChecked(isChecked);

    // Quando o item clicado estiver marcado.
    props.onChecked(isChecked);
  };

  return (
    <ListItem className={checkboxChecked ? "active" : ""} key={props.id}>
      {/* <Check onCheckedChange={checkHandler}></Check> */}
      <input type="checkbox" onClick={checkHandler} />
      <span style={{flex:"1"}}>{props.text}</span>

      <DeleteButton onClick={props.onDelete} data-cy="deleteButton">
        <Icon src={trashIcon} alt="Trash Icon"></Icon>
      </DeleteButton>
    </ListItem>
  );
};
