import { A, usePath } from 'hookrouter';
import React from 'react';
import { ReactComponent as PokemonLogoSvg } from '../../assets/img/Logo.svg';
import style from './Header.module.scss';
import { GENERAL_MENU } from '../../routes';

// import logo from '../../assets/img/Logo.svg';

const Header = () => {
  const path = usePath();
  return (
    <header className={style.root}>
      <div className={style.wrapper}>
        <div className={style.logo}>
          <PokemonLogoSvg />
        </div>
        {/*  */}
        <nav className={style.nav}>
          {GENERAL_MENU.map(({ link, title }) => (
            <li key={title}>
              <A className={style.navLink + (link === path ? ' is__active' : '')} href={link}>
                {title}
              </A>
            </li>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
