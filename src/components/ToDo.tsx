import {Check, Trash} from "@phosphor-icons/react";
import styles from "./ToDo.module.css";

export interface ToDoData {
  id: string;
  content: string;
  isDone: boolean;
}

interface ToDoProps {
  todoData: ToDoData;
  onToggleTodo: (id: string) => void;
  onDeleteTodo: (id: string) => void;
}

export function ToDo({todoData, onDeleteTodo, onToggleTodo}: ToDoProps) {
  return (
    <div className={`${styles.todo} ${todoData.isDone ? styles.done : ""}`}>
      <span
        className={styles.checkbox}
        onClick={() => onToggleTodo(todoData.id)}
        title="Marcar tarefa como concluída"
      >
        {todoData.isDone && <Check />}
      </span>
      <span className={styles.content}>{todoData.content}</span>
      <button
        className={styles.deleteButton}
        onClick={() => onDeleteTodo(todoData.id)}
      >
        <Trash size={24} />
      </button>
    </div>
  );
}
