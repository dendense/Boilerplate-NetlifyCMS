import React, { useState } from 'react'
import { Dropdown } from 'react-bootstrap';
import { THEME_LIST } from '../configs/themeConfig';
import { titleCase } from '../utils/utilityFunction';

export default function ThemeSwitch() {

  let currentTheme = document.body.className.replace('theme-', '')
    || localStorage.getItem('theme');

  if (currentTheme && THEME_LIST.includes(currentTheme)) {
    document.body.className = `theme-${currentTheme}`;
  } else {
    currentTheme = THEME_LIST[0];
    document.body.className = `theme-${currentTheme}`;
    localStorage.setItem('theme', currentTheme);
  }

  const [activeTheme, setActiveTheme] = useState(currentTheme);

  const switchTheme = (theme) => {
    if (THEME_LIST.includes(theme)) {
      localStorage.setItem('theme', theme);
      document.body.className = `theme-${theme}`;
      setActiveTheme(theme);
    }
  }
  

  return (
    <Dropdown>
      <Dropdown.Toggle variant='primary'>
        🎨 {titleCase(activeTheme)} Theme
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {THEME_LIST.map((theme, index) => (
          <Dropdown.Item key={index} onClick={() => switchTheme(theme)}>
            {titleCase(theme)}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  )
}
