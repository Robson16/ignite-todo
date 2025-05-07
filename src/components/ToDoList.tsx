import styles from "./ToDoList.module.css";
import clipboard from "../assets/clipboard.svg";

export function ToDoList() {
  return (
    <>
      <div className={styles.infos}>
        <div className={styles.counter}>
          <span className={styles.created}>Tarefas criadas</span>
          <span className={styles.counterValue}>0</span>
        </div>
        <div className={styles.counter}>
          <span className={styles.done}>Concluídas</span>
          <span className={styles.counterValue}>2 de 5</span>
        </div>
      </div>

      <div className={styles.list}>
        <div className={styles.emptyList}>
          <img src={clipboard} alt="clipboard" />
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <span>Crie tarefas e organize seus itens a fazer</span>
        </div>
      </div>
    </>
  );
}
