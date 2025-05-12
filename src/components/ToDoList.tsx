import clipboard from "../assets/clipboard.svg";
import { ToDo, type ToDoData } from "./ToDo";
import styles from "./ToDoList.module.css";

interface ToLoListProps {
  todosData: ToDoData[];
  onToggleTodo: (id: string) => void;
  onDeleteTodo: (id: string) => void;
}

export function ToDoList({
  todosData,
  onToggleTodo,
  onDeleteTodo,
}: ToLoListProps) {
  return (
    <>
      <div className={styles.infos}>
        <div className={styles.counter}>
          <span className={styles.created}>Tarefas criadas</span>
          <span className={styles.counterValue}>{todosData.length}</span>
        </div>
        <div className={styles.counter}>
          <span className={styles.done}>Concluídas</span>
          <span className={styles.counterValue}>
            {`${todosData.reduce((accumulator, currentTodo) => {
              if (currentTodo.isDone) {
                return accumulator + 1;
              }
              return accumulator;
            }, 0)} de ${todosData.length}`}
          </span>
        </div>
      </div>

      <div className={styles.list}>
        {todosData.length === 0 ? (
          <div className={styles.emptyList}>
            <img src={clipboard} alt="clipboard" />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <span>Crie tarefas e organize seus itens a fazer</span>
          </div>
        ) : (
          todosData.map((todo) => (
            <ToDo
              key={todo.id}
              todoData={todo}
              onToggleTodo={onToggleTodo}
              onDeleteTodo={onDeleteTodo}
            />
          ))
        )}
      </div>
    </>
  );
}
