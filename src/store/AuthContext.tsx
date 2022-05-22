import React, { useState } from 'react';

const AuthContext = React.createContext<{
  token: string;
  username: string;
  isLoggedIn: boolean;
  onLogin: (token: string, username: string, rememberDevice: boolean) => void;
  onLogout: () => void;
}>({
  token: '',
  username: '',
  isLoggedIn: false,
  onLogin: (token: string, username: string, rememberDevice: boolean) => {},
  onLogout: () => {},
});

export const AuthContextProvider: React.FC<{ children: React.ReactNode }> = (
  props
) => {
  const [token, setToken] = useState('');
  const [username, setUsername] = useState('');
  const isLoggedIn = !!token;

  const loginHandler = (
    token: string,
    username: string,
    rememberDevice: boolean
  ) => {
    setToken(token);
    setUsername(username);

    if (rememberDevice) {
      localStorage.setItem('token', token);
      localStorage.setItem('username', username);
    }
  };

  const logoutHandler = () => {
    setToken('');
    setUsername('');
    localStorage.removeItem('token');
    localStorage.removeItem('username');
  };

  return (
    <AuthContext.Provider
      value={{
        token: token,
        username: username,
        isLoggedIn: isLoggedIn,
        onLogin: loginHandler,
        onLogout: logoutHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
