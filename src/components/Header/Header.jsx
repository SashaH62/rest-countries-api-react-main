import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <NavLink to="/">
          <h1>Where in the world?</h1>
        </NavLink>
        <ThemeToggle />
      </div>
    </header>
  );
}

export default Header;
