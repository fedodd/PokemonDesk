import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

import Heading from '../../components/Heading/Heading';
import PokemonCard from '../../components/PokemonCard/PokemonCard';

import style from './Pokedex.module.scss';

import pokemonsData from './pokemons';

interface IpokeData {
  name_clean: string;
  abilities: string[];
  stats: {
    hp: number;
    attack: number;
    defense: number;
    'special-attack': number;
    'special-defense': number;
    speed: number;
  };
  types: string[];
  img: string;
  name: 'string';
  base_experience: number;
  height: number;
  id: number;
  is_default: boolean;
  order: number;
  weight: number;
}

const Home = () => {
  const pokemons = pokemonsData.map((card) => {
    return <PokemonCard pokemon={card} key={card.id} />;
  });

  return (
    <div className={style.root}>
      <Header />
      <div>
        <Heading level="h1">Pokedex</Heading>

        {pokemons}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
