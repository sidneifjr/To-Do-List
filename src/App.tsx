import { useState } from "react";

import { Header } from "./components/Header";
import { Forms } from "./components/Form";
import { InputField } from "./components/InputField";
import { Button } from "./components/Button";
import { Icon } from "./components/Icon";
import { List } from "./components/List";

import PlusIcon from "./assets/plus.svg";

const lists = [
  {
    id: 1,
    text: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer."
  },
  {
    id: 2,
    text: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer."
  },
  {
    id: 3,
    text: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer."
  },
  {
    id: 4,
    text: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer."
  },
  {
    id: 5,
    text: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer."
  },
  {
    id: 6,
    text: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer."
  },
]

const App = () => {
  const [listsContent, setListsContent] = useState(lists);
  const [inputValue, setInputValue] = useState('');

  const formHandler = (e:any) => {
    e.preventDefault();

    if(inputValue === "") return; // impede o cadastro de conteúdo vazio pelo usuário.

    setListsContent([
      ...listsContent, {
        id: Math.random(),
        text: inputValue
      }
    ]);

    setInputValue(''); // Limpa o campo, retornando ao seu valor inicial.
  }

  const handleInput = (el:any) => {
    setInputValue(el.target.value);
  }

  const handleDelete = (itemToDelete: any) => {
    event.preventDefault();

    const listsContentWithoutDeletedItem = listsContent.filter(listsContentItem => {
      return listsContentItem !== itemToDelete;
    });

    setListsContent(listsContentWithoutDeletedItem);
  }

  return (
    <>
      <Header />

      <Forms onSubmit={formHandler}>
        <InputField onChange={handleInput} value={inputValue} type="text" name="formInput" placeholder="Adicione uma nova tarefa" />
        <Button type="submit">Criar <Icon src={PlusIcon} alt="Plus Icon" style={{ marginLeft: "8px" }}></Icon></Button>
      </Forms>

      <List listItens={listsContent} onDelete={handleDelete} />
    </>
  )
};

export default App;
