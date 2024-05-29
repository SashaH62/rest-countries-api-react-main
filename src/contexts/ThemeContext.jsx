function setTheme(themeMode) {
  localStorage.setItem("themeMode", themeMode);
  document.documentElement.className = themeMode;
}

function getThemeMode() {
  if (localStorage.getItem("themeMode")) {
    const theme = localStorage.getItem("themeMode");
    theme === "light" ? setTheme("light") : setTheme("dark");
  } else {
    setTheme("light");
  }
}

export { setTheme, getThemeMode };
