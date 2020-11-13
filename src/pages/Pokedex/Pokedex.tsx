import React, { useEffect, useState } from 'react';

import Heading from '../../components/Heading/Heading';
import PokemonCard from '../../components/PokemonCard/PokemonCard';

import style from './Pokedex.module.scss';

interface iPokemon {
  // name_clean: string;
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
  name: string;
  // base_experience: number;
  height: number;
  id: number;
  // is_default: boolean;
  // order: number;
  // weight: number;
}

const usePokemons = () => {
  // const [totalPokemons, setTotalPokemons] = useState(0);
  const [data, setData] = useState({ total: 0, pokemons: [] });
  const [isLoading, setIsLoading] = useState(true);
  const [isFalse, setIsFalse] = useState(false);

  useEffect(() => {
    const getPokemons = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('http://zar.hosthot.ru/api/v1/pokemons?limit=100');
        const result = await response.json();
        setData(result);
      } catch (error) {
        setIsFalse(true);
      } finally {
        setIsLoading(false);
      }
    };

    getPokemons();
  }, []);

  return {
    data,
    isLoading,
    isFalse,
  };
};

const Home = () => {
  const { data, isLoading, isFalse } = usePokemons();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isFalse) {
    return <div>Something is wrong...</div>;
  }

  return (
    <div className={style.root}>
      <div className={style.content}>
        <Heading level="h1">
          {data.total} <strong>Pokemons</strong> for you to choose your favorite
        </Heading>

        <div className={style.pokemons}>
          {data.pokemons.map((card: iPokemon) => {
            return <PokemonCard pokemon={card} key={card.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
