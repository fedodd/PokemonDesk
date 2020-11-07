import React from 'react';

import { ReactComponent as PokemonLogoSvg } from '../../assets/img/Logo.svg';
// import cn from 'classnames';
import style from './Header.module.scss';

// import logo from '../../assets/img/Logo.svg';

const Header = () => {
  interface IMenu {
    id: number;
    value: string;
    link: string;
  }
  const MENU: IMenu[] = [
    {
      id: 1,
      value: 'Home',
      link: '/#',
    },
    {
      id: 2,
      value: 'Pokédex',
      link: '/#',
    },
    {
      id: 3,
      value: 'Legendaries',
      link: '/#',
    },
    {
      id: 4,
      value: 'Documentation',
      link: '/#',
    },
  ];

  return (
    <header className={style.root}>
      <div className={style.wrapper}>
        <div className={style.logo}>
          {/* <img src={logo} alt="Pokemon" /> */}
          <PokemonLogoSvg />
        </div>
        <nav className={style.nav}>
          {MENU.map(({ value, link, id }) => (
            <li key={id}>
              <a className={style.navLink} href={link}>
                {value}
              </a>
            </li>
          ))}

          {/* <li>
            <a className={style.navItem} href="/#" />
          </li>
          <li>
            <a className={style.navItem} href="/#" />
          </li>
          <li>
            <a className={style.navItem} href="/#" />
          </li> */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
