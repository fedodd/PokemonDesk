import React from 'react';

// import cn from 'classnames';
import style from './Header.module.scss';
import logo from '../../assets/img/Logo.svg';

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.logo}>
        <img src={logo} alt="Pokemon" />
      </div>
      <nav className={style.nav}>
        <li className={style.navItem}>Home</li>
        <li className={style.navItem}>Pokédex</li>
        <li className={style.navItem}>Legendaries</li>
        <li className={style.navItem}>Documentation</li>
      </nav>
    </header>
  );
};

export default Header;
