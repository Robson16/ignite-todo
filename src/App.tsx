import styles from "./App.module.css";
import {Header} from "./components/Header";
import {NewToDoForm} from "./components/NewToDoForm";

export function App() {
  return (
    <>
      <Header />

      <main className={styles.container}>
        <NewToDoForm />
      </main>
    </>
  );
}
