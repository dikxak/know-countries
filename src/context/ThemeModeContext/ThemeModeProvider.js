import React, { useState } from 'react';

import ThemeModeContext from './theme-mode-context';

const ThemeModeProvider = props => {
  const [theme, setTheme] = useState('light');

  const themeChangeHandler = theme => {
    setTheme(theme);
  };

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
