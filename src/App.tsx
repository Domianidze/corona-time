import { Routes, Route, Navigate } from 'react-router-dom';

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
  Landing,
  Worldwide,
  ByCountry,
} from 'pages';

const App = () => {
  return (
    <div className='App font-inter text-dark/100'>
      <Routes>
        <Route path='/authentication' element={<Authentication />}>
          <Route path='signup' element={<Signup />} />
          <Route path='login' element={<Login />} />
          <Route path='*' element={<Navigate to='signup' />} />
          <Route index element={<Navigate to='signup' />} />
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
        </Route>
        <Route path='/landing' element={<Landing />}>
          <Route path='worldwide' element={<Worldwide />} />
          <Route path='by-country' element={<ByCountry />} />
          <Route path='*' element={<Navigate to='worldwide' />} />
          <Route index element={<Navigate to='worldwide' />} />
        </Route>
        <Route path='*' element={<Navigate to='/authentication' />} />
        <Route index element={<Navigate to='/authentication' />} />
      </Routes>
    </div>
  );
};

export default App;
