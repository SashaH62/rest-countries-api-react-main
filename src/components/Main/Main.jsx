import styles from "./Main.module.scss";

function Main({ addClass, children }) {
  return (
    <main className={`${styles.main} ${addClass ? addClass : ""}`}>
      {children}
    </main>
  );
}

export default Main;
