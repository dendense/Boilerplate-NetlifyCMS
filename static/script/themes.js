import { THEME_LIST } from "../../src/configs/themeConfig";

console.log("hola");

document.onload(() => {
  console.log("hola");
  const currentTheme = localStorage.getItem("theme");
  if (THEME_LIST.includes(currentTheme)) {
    document.body.className = `theme-${currentTheme}`;
  } else {
    document.body.className = `theme-${THEME_LIST[0]}`;
  }
});

document.addEventListener("load", () => {
  console.log("hola");
  const currentTheme = localStorage.getItem("theme");
  if (THEME_LIST.includes(currentTheme)) {
    document.body.className = `theme-${currentTheme}`;
  } else {
    document.body.className = `theme-${THEME_LIST[0]}`;
  }
});
