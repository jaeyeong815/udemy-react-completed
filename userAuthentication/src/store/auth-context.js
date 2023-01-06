import { createContext, useCallback, useEffect, useState } from 'react';

let logoutTimer;

const AuthContext = createContext({
  token: '',
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

const calculateExpirationTime = (expireTime) => {
  const currentTime = new Date().getTime();
  const expirationTime = new Date(expireTime).getTime();

  return expirationTime - currentTime;
};

const retrieveStoredToken = () => {
  const storedToken = localStorage.getItem('token');
  const storedExpirationTime = localStorage.getItem('expiredTime');

  const remainingTime = calculateExpirationTime(storedExpirationTime);

  if (remainingTime <= 3600) {
    localStorage.clear();
    return null;
  }

  return { token: storedToken, duration: remainingTime };
};

export const AuthContextProvider = ({ children }) => {
  const tokenData = retrieveStoredToken();
  let initToken;
  if (tokenData) {
    initToken = tokenData.token;
  }
  // const initToken = tokenData ? tokenData.token : null;
  const [token, setToken] = useState(initToken);

  const userIsLoggedIn = !!token;

  const logoutHandler = useCallback(() => {
    setToken(null);
    localStorage.clear();

    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  }, []);

  const loginHandler = (token, expireTime) => {
    setToken(token);
    localStorage.setItem('token', token);
    localStorage.setItem('expiredTime', expireTime);

    const remainingTime = calculateExpirationTime(expireTime);

    logoutTimer = setTimeout(logoutHandler, remainingTime);
  };

  useEffect(() => {
    if (tokenData) {
      logoutTimer = setTimeout(logoutHandler, tokenData.duration);
    }
  }, [tokenData, logoutHandler]);

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

export default AuthContext;
