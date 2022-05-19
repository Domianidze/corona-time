import { Routes, Route, Navigate } from 'react-router-dom';

import {
  Landing,
  Authentication,
  Signup,
  Login,
  Reset,
  ResetPassword,
  SetPassword,
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
        <Route path='/landing' element={<Landing />} />
        <Route path='*' element={<Navigate to='/authentication' />} />
        <Route index element={<Navigate to='/authentication' />} />
      </Routes>
    </div>
  );
};

export default App;
