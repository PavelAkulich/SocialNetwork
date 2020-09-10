import React from 'react';
import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  return <header className={classes.header}>
    <img src="https://im0-tub-by.yandex.net/i?id=0caa159bede0a70e1eb0455e38769dc9&n=13"></img>
    <div className={classes.loginBlock}>
      {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
    </div>
  </header>
}

export default Header;