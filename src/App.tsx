import { useState } from "react";

import { Header } from "./components/Header";
import { Forms } from "./components/Form";
import { InputField } from "./components/InputField";
import { Button } from "./components/Button";
import { Icon } from "./components/Icon";
import { List } from "./components/List";

import PlusIcon from "./assets/plus.svg";

interface ILists {
  id: number;
  text: string;
}

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
  const [listsContent, setListsContent] = useState<ILists[]>(lists);

  // Armazena o valor digitado no input.
  const [inputValue, setInputValue] = useState<string>('');

  // Controla a exibição da mensagem de erro, relacionada ao valor do input.
  const [inputError, setInputError] = useState<boolean>(false);

  // Obtém o valor digitado no input.
  const handleInput = (e: any) => {
    setInputValue(e.target.value);
  }

  // Gerencia as operações no formulário.
  const formHandler = (el: any) => {
    el.preventDefault();

    // Impede o cadastro de conteúdo vazio pelo usuário; trim() remove a possibilidade de duplos ou mais espaços.
    if(inputValue.trim().length === 0) {
      setInputError(true);
      return;
    };

    // Se o usuário inseriu um valor inválido, a mensagem de erro é exibida. Porém, se ele inserir um valor válido após, a mensagem de erro continuará a ser exibida.
    // Então, é necessário retornar o 'inputError' para false.
    setInputError(false);

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
        <InputField onChange={handleInput} hasError={inputError} value={inputValue} type="text" name="formInput" placeholder="Adicione uma nova tarefa" />
        <Button type="submit">Criar <Icon src={PlusIcon} alt="Plus Icon" style={{ marginLeft: "8px" }}></Icon></Button>
      </Forms>

      <List listItens={listsContent} onDelete={handleDelete} />
    </>
  )
};

export default App;
