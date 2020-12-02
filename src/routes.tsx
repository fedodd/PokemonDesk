import React, { PropsWithChildren } from 'react';

import HomePage from './pages/Home/Home';
import Pokedex from './pages/Pokedex/Pokedex';
import Error404 from './pages/NotFound/NotFound';
import Pokemon, { PokemonProps } from './pages/Pokemon/Pokemon';

interface IGeneralMenu {
  component: (props: PropsWithChildren<any>) => JSX.Element;
  title: string;
  link: string;
}

export enum LinkEnum {
  HOME = '/',
  POKEDEX = '/pokedex',
  LEGENDARIE = '/legendarie',
  DOCUMENTATION = '/documentation',
  POKEMON = '/pokedex/:id',
}

export const GENERAL_MENU: IGeneralMenu[] = [
  {
    title: 'Home',
    link: LinkEnum.HOME,
    component: () => <HomePage />,
  },
  {
    title: 'Pokédex',
    link: LinkEnum.POKEDEX,
    component: () => <Pokedex />,
  },
  {
    title: 'Legendaries',
    link: LinkEnum.LEGENDARIE,
    component: () => <Error404 title="Legendaries" />,
  },
  {
    title: 'Documentation',
    link: LinkEnum.DOCUMENTATION,
    component: () => <Error404 title="Documentation" />,
  },
];

export const SECOND_ROUTES: IGeneralMenu[] = [
  {
    title: 'Pokemon',
    link: LinkEnum.POKEMON,
    component: ({ id }: PokemonProps) => <Pokemon id={id} />,
  },
];

interface IAccMenu {
  [n: string]: (props: PropsWithChildren<any>) => JSX.Element;
}

const routes = [...GENERAL_MENU, ...SECOND_ROUTES].reduce((acc: IAccMenu, item: IGeneralMenu) => {
  acc[item.link] = item.component;
  return acc;
}, {});

export default routes;
