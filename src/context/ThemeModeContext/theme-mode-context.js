import React from 'react';

const ThemeModeContext = React.createContext({
  themeMode: 'light',
  setThemeMode: theme => {},
});

export default ThemeModeContext;
