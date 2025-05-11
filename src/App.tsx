import {useState, type FormEvent} from "react";
import styles from "./App.module.css";
import {Header} from "./components/Header";
import {NewToDoForm} from "./components/NewToDoForm";
import {type ToDoData} from "./components/ToDo";
import {ToDoList} from "./components/ToDoList";

export function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState<ToDoData[]>([
    {
      id: "3f07d04f-31d6-4fda-a133-2e15c1d9d629",
      content: "Estudar React",
      isDone: false,
    },
    {
      id: "bae95842-072e-43b5-bcf4-4452019fbd0e",
      content: "Praticar TypeScript",
      isDone: false,
    },
    {
      id: "e4d4918e-be81-4454-87ce-7d5a52b5f13d",
      content: "Ler documentação do Next.js",
      isDone: false,
    },
    {
      id: "a92586e6-28ca-49b0-9614-8fe59288f211",
      content: "Criar um projeto com Tailwind CSS",
      isDone: false,
    },
    {
      id: "f0107b88-ef75-4111-b824-6d9cbc2829de",
      content: "Revisar conceitos de JavaScript",
      isDone: false,
    },
    {
      id: "31a60a11-fea1-4a67-8b57-35a73c53eca7",
      content: "Explorar a API do React Router",
      isDone: false,
    },
  ]);

  function handleNewTodoFormChange(newTodo: string) {
    setNewTodo(newTodo);
  }

  function handleNewTodoFormSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (newTodo.trim() === "") {
      return;
    }

    const newTodoData = {
      id: crypto.randomUUID(),
      content: newTodo,
      isDone: false,
    };

    setTodos((prevTodos) => [newTodoData, ...prevTodos]);
    setNewTodo("");
  }

  function handleToggleTodo(id: string) {
    const targetTodo = todos.find((todo) => todo.id === id);
    const othersToDo = todos.filter((todo) => todo.id !== id);
    let updatedTodos = [];

    targetTodo!.isDone = !targetTodo!.isDone;

    if (targetTodo!.isDone) {
      updatedTodos = [...othersToDo, targetTodo!];
    } else {
      updatedTodos = [targetTodo!, ...othersToDo];
    }

    setTodos(updatedTodos);
  }

  function handleDeleteTodo(id: string) {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  }

  return (
    <>
      <Header />
      <main className={styles.container}>
        <NewToDoForm
          newTodoValue={newTodo}
          onNewTodoFormChange={handleNewTodoFormChange}
          onNewTodoFormSubmit={handleNewTodoFormSubmit}
        />
        <ToDoList
          todosData={todos}
          onToggleTodo={handleToggleTodo}
          onDeleteTodo={handleDeleteTodo}
        />
      </main>
    </>
  );
}
