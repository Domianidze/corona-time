import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';

import { AuthContextProvider } from 'state';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { translationsEn, translationsGe } from 'translations';

import App from 'App';
import 'index.css';

const savedLang = localStorage.getItem('lang');

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: translationsEn,
    },
    ge: {
      translation: translationsGe,
    },
  },
  lng: savedLang ? savedLang : 'en',
  fallbackLng: 'en',

  interpolation: {
    escapeValue: false,
  },
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <AuthContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthContextProvider>
);
