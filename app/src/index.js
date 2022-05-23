import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Qui inserisci la configurazione del tuo tema che puoi fare tranquillamente qui
// https://bareynol.github.io/mui-theme-creator
const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#fbe9e7',
    },
    secondary: {
      main: '#FF6A3C',
    },
    background: {
      default: '#AD1818',
    }
  },
  shape: {
      borderRadius: 20,
  }


});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);