import React, { useContext } from 'react';
import { AuthContext } from '../../store/auth-context';
import classes from './Navigation.module.css';

const Navigation = (props) => {
  const auth = useContext(AuthContext);

  return (
    <nav className={classes.nav}>
      <ul>
        {auth.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {auth.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {auth.isLoggedIn && (
          <li>
            <button onClick={props.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
