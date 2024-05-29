import styles from "./Button.module.scss";

function Button({ clickHandler, children }) {
  return (
    <button className={styles.button} onClick={clickHandler}>
      {children}
    </button>
  );
}

export default Button;
