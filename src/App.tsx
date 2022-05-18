import { Routes, Route, Navigate } from 'react-router-dom';

import {
  Landing,
  Authorization,
  Signup,
  Login,
  ResetPassword,
  SetPassword,
} from 'pages';

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/authorization' element={<Authorization />}>
          <Route path='signup' element={<Signup />} />
          <Route path='login' element={<Login />} />
          <Route path='reset-password' element={<ResetPassword />} />
          <Route path='set-password' element={<SetPassword />} />
          <Route index element={<Navigate to='signup' />} />
        </Route>
        <Route path='/landing' element={<Landing />} />
        <Route index element={<Navigate to='/authorization' />} />
      </Routes>
    </div>
  );
};

export default App;
