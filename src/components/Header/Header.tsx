import React from 'react';
import { Link } from 'react-router-dom';
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
      link: '/Home',
    },
    {
      id: 2,
      value: 'Pokédex',
      link: '/Pokedex',
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
              <Link className={style.navLink} to={link}>
                {value}
              </Link>
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
