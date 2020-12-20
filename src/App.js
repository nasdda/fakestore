import React from 'react';
import './App.css';

import AppRouter from './router/router'
import { ThemeProvider, createMuiTheme } from '@material-ui/core'


// end test
function App() {
  const theme = createMuiTheme({
    typography: {
      fontSize: 16
    },
  });
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <AppRouter />
      </ThemeProvider>
    </div>
  );
}

export default App;
