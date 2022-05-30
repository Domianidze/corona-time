import React, { useState, PropsWithChildren } from 'react';

const AuthContext = React.createContext<{
  token: string;
  username: string;
  isLoggedIn: boolean;
  onLogIn: (token: string, username: string, rememberDevice: boolean) => void;
  onLogOut: () => void;
}>({
  token: '',
  username: '',
  isLoggedIn: false,
  onLogIn: (token: string, username: string, rememberDevice: boolean) => {},
  onLogOut: () => {},
});

export const AuthContextProvider: React.FC<PropsWithChildren<unknown>> = (
  props
) => {
  const [token, setToken] = useState('');
  const [username, setUsername] = useState('');
  const isLoggedIn = !!token;

  const logInHandler = (
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

  const logOutHandler = () => {
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
        onLogIn: logInHandler,
        onLogOut: logOutHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
