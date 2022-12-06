import React, { LiHTMLAttributes, useState } from "react";
import { Icon } from "../../Icon";
import { ListItem } from "./styles";

import trashIcon from "../../../assets/trash.svg";

interface ListItemsProps extends LiHTMLAttributes<HTMLUListElement> {
  text?: string;
  onDelete?: () => void;
  // onCheck?: () => void;
}

export const ListItems = ({ ...props }: ListItemsProps) => {
  const [checkboxChecked, setCheckboxChecked] = useState(false);

  const checkHandler = ({ target }: React.MouseEvent<HTMLInputElement>) => {
    setCheckboxChecked(target.checked);
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
