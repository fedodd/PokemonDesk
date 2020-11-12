import React from 'react';

import HomePage from './pages/Home/Home';
import Pokedex from './pages/Pokedex/Pokedex';
import Error404 from './pages/NotFound/NotFound';

interface IGeneralMenu {
  component: () => JSX.Element;
  title: string;
  link: string;
}

export const GENERAL_MENU: IGeneralMenu[] = [
  {
    title: '',
    link: '/',
    component: () => <HomePage />,
  },
  {
    title: 'Home',
    link: '/home',
    component: () => <HomePage />,
  },
  {
    title: 'Pokédex',
    link: '/pokedex',
    component: () => <Pokedex />,
  },
  {
    title: 'Legendaries',
    link: '/legendaries',
    component: () => <Error404 title="Legendaries" />,
  },
  {
    title: 'Documentation',
    link: '/documentation',
    component: () => <Error404 title="Documentation" />,
  },
];

interface IAccMenu {
  [n: string]: () => JSX.Element;
}

const routes = GENERAL_MENU.reduce((acc: IAccMenu, item: IGeneralMenu) => {
  acc[item.link] = item.component;
  return acc;
}, {});

export default routes;
