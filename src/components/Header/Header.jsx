import styles from "./Header.module.scss";

function Header({ colorScheme, colorSchemeHandler }) {
  function handleColorSchemeChange() {
    colorSchemeHandler((prev) => (prev === "light" ? "dark" : "light"));
  }

  return (
    <header className={styles.header}>
      <h1>Where in the world?</h1>
      <button onClick={handleColorSchemeChange}>{colorScheme} Mode</button>
    </header>
  );
}

export default Header;
