import { PlusCircle } from "@phosphor-icons/react";
import { type FormEvent } from "react";
import styles from "./NewToDoForm.module.css";

interface NewToDoFormProps {
  newTodoValue: string;
  onNewTodoFormChange: (newTodo: string) => void;
  onNewTodoFormSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

export function NewToDoForm({
  newTodoValue,
  onNewTodoFormChange,
  onNewTodoFormSubmit,
}: NewToDoFormProps) {
  return (
    <form className={styles.form} onSubmit={onNewTodoFormSubmit}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={newTodoValue}
        onChange={(event) => onNewTodoFormChange(event.target.value)}
      />
      <button type="submit">
        Criar <PlusCircle size={16} />
      </button>
    </form>
  );
}
