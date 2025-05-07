import styles from "./App.module.css";
import {Header} from "./components/Header";
import {NewToDoForm} from "./components/NewToDoForm";
import {ToDoList} from "./components/ToDoList";

export function App() {
  return (
    <>
      <Header />

      <main className={styles.container}>
        <NewToDoForm />
        <ToDoList />
      </main>
    </>
  );
}
