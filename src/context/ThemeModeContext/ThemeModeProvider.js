import React, { useState, useEffect } from 'react';

import ThemeModeContext from './theme-mode-context';

const ThemeModeProvider = props => {
  const [theme, setTheme] = useState();

  const themeChangeHandler = theme => {
    setTheme(theme);
  };

  useEffect(() => {
    // If user device's theme is dark, set application color theme to dark
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }
  }, []);

  const themeContext = {
    themeMode: theme,
    setThemeMode: themeChangeHandler,
  };

  return (
    <ThemeModeContext.Provider value={themeContext}>
      {props.children}
    </ThemeModeContext.Provider>
  );
};

export default ThemeModeProvider;
