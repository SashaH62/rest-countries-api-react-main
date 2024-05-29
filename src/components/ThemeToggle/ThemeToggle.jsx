import { useEffect, useState } from "react";
import { setTheme } from "../../contexts/ThemeContext";
import styles from "./ThemeToggle.module.scss";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import DarkModeIcon from "@mui/icons-material/DarkMode";

function ThemeToggle() {
  const [colorScheme, setColorScheme] = useState("");

  useEffect(() => {
    if (localStorage.getItem("themeMode")) {
      setColorScheme(localStorage.getItem("themeMode"));
    }
  }, []);

  function handleThemeToggle() {
    if (colorScheme === "light") {
      setColorScheme("dark");
      setTheme("dark");
    } else {
      setColorScheme("light");
      setTheme("light");
    }
  }

  return (
    <button className={styles.themeToggle} onClick={handleThemeToggle}>
      {colorScheme === "dark" ? <DarkModeIcon /> : <DarkModeOutlinedIcon />}
      Dark Mode
    </button>
  );
}

export default ThemeToggle;
