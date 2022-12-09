import { useState } from "react";

import { Header } from "./components/Header";
import { Forms } from "./components/Form";
import { InputField } from "./components/InputField";
import { Button } from "./components/Button";
import { Icon } from "./components/Icon";
import { List } from "./components/List";

import PlusIcon from "./assets/plus.svg";

// Conteúdo a ser exibido.
const lists = [
  {
    id: 0,
    text: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer."
  },
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
]

const App = () => {
  // Armazena o conteúdo a ser exibido.
  const [listsContent, setListsContent] = useState(lists);

  // Armazena o valor digitado no input.
  const [inputValue, setInputValue] = useState('');

  // Obtém o valor digitado no input.
  const handleInput = (e: any) => {
    setInputValue(e.target.value);
  }

  // Gerencia as operações no formulário.
  const formHandler = (el: any) => {
    el.preventDefault();

    // Impede o cadastro de conteúdo vazio pelo usuário.
    if(inputValue === "") return;

    // O spread operator (...) pega todos os valores pré-existentes em "listsContent". Ou seja, a variável "lists"!
    // Então, adiciona um novo item, com o id gerado randomicamente e usando o conteúdo estipulado em "inputValue".
    setListsContent([
      ...listsContent, {
        id: Math.random(),
        text: inputValue
      }
    ]);

    // Limpa o input, retornando ao seu valor inicial.
    setInputValue('');
  }

  // Lida com a remoção de itens.
  const handleDelete = (itemToDelete: any) => {
    event!.preventDefault(); // A exclamação (!) é uma forma de avisar que o 'event' nunca será undefined; ou seja, sempre retornará algo.

    // Filtra os itens, de acordo com a condição: "se o item atual for diferente do item que passei, incluir em una nova lista; ao encerrar a iteração, retornar tal lista".
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
