import React from 'react';
import './App.css';

import AppRouter from './router/router'
import { ThemeProvider, createMuiTheme } from '@material-ui/core'


// end test
function App() {
  const theme = createMuiTheme();

  theme.typography.h3 = {
    fontSize: '1.3rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
    },
  };
  theme.typography.h1 = {
    fontSize: '1.3rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem'
    }
  }
  theme.typography.h5 = {
    fontSize: '1rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.8rem'
    }
  }


  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <AppRouter />
      </ThemeProvider>
    </div>
  );
}

export default App;
