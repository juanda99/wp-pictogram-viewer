import React from 'react';
import ReactDOM from 'react-dom';
import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline';
import App from './App';
import { ThemeProvider } from '@material-ui/core';
import theme from './theme';
import { I18nextProvider } from "react-i18next";
import './locales';
import i18next from 'i18next';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <I18nextProvider i18n={i18next}>
        <ScopedCssBaseline>
          <App />
        </ScopedCssBaseline>
      </I18nextProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('arasaac-pictogram-viewer-react')
);

