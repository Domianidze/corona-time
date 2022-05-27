import { useContext, useEffect } from 'react';

import AuthContext from 'state/AuthContext';

import { Routes, Route, Navigate } from 'react-router-dom';

import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

import {
  Authentication,
  Signup,
  Login,
  Reset,
  ResetPassword,
  SetPassword,
  Notification,
  SendEmail,
  ConfirmAccount,
  UpdatePassword,
  Landing,
  Worldwide,
  ByCountry,
} from 'pages';

const App = () => {
  const { t } = useTranslation();
  console.log(t('applicationRunning'));

  const lang = i18next.language;

  const authCtx = useContext(AuthContext);
  const isLoggedIn = !!localStorage.getItem('token') || authCtx.isLoggedIn;

  const { onLogin } = authCtx;

  useEffect(() => {
    const savedToken = localStorage.getItem('token');
    const savedUsername = localStorage.getItem('username');

    if (savedToken && savedUsername) {
      onLogin(savedToken, savedUsername, true);
    }
  }, [onLogin]);

  let indexRoute = './authentication';

  if (isLoggedIn) {
    indexRoute = './landing';
  }

  return (
    <div
      className={`App ${
        lang === 'ge' ? 'font-firaGO' : 'font-inter'
      } text-dark/100`}
    >
      <Routes>
        <Route path='/authentication' element={<Authentication />}>
          <Route path='signup' element={<Signup />} />
          <Route path='login' element={<Login />} />
          <Route path='*' element={<Navigate to='login' />} />
          <Route index element={<Navigate to='login' />} />
        </Route>
        <Route path='/reset' element={<Reset />}>
          <Route path='reset-password' element={<ResetPassword />} />
          <Route path='set-password' element={<SetPassword />} />
          <Route path='*' element={<Navigate to='reset-password' />} />
          <Route index element={<Navigate to='reset-password' />} />
        </Route>
        <Route path='/notification' element={<Notification />}>
          <Route path='send-email' element={<SendEmail />} />
          <Route path='confirm-account' element={<ConfirmAccount />} />
          <Route path='update-password' element={<UpdatePassword />} />
        </Route>
        {isLoggedIn && (
          <Route path='/landing' element={<Landing />}>
            <Route path='worldwide' element={<Worldwide />} />
            <Route path='by-country' element={<ByCountry />} />
            <Route path='*' element={<Navigate to='worldwide' />} />
            <Route index element={<Navigate to='worldwide' />} />
          </Route>
        )}
        <Route path='*' element={<Navigate to={indexRoute} />} />
        <Route index element={<Navigate to={indexRoute} />} />
      </Routes>
    </div>
  );
};

export default App;
