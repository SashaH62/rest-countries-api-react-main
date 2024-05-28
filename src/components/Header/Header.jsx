import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";

function Header({ colorScheme, colorSchemeHandler }) {
  function handleColorSchemeChange() {
    colorSchemeHandler((prev) => (prev === "light" ? "dark" : "light"));
  }

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <NavLink to="/">
          <h1>Where in the world?</h1>
        </NavLink>
        <button onClick={handleColorSchemeChange}>{colorScheme} Mode</button>
      </div>
    </header>
  );
}

export default Header;
