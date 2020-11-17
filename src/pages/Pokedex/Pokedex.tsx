import React, { useMemo, useState } from 'react';

import Heading from '../../components/Heading/Heading';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import useData from '../../hook/getData';
// import req from '../../utils/request';

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

const Home = () => {
  const [searchValue, setSearchValue] = useState('');
  const [query, setQuery] = useState({});
  // const query = useMemo(
  //   () => ({
  //     name: searchValue,
  //   }),
  //   [searchValue],
  // );

  const { data, isLoading, isFalse } = useData('getPokemons', query, [searchValue]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setQuery((s) => ({
      ...s,
      name: e.target.value,
    }));
  };

  // if (isLoading) {
  //   return <div>Loading...</div>;p
  // }

  if (isFalse) {
    return <div>Something is wrong...</div>;
  }

  return (
    <div className={style.root}>
      <div className={style.content}>
        <Heading level="h1">
          {!isLoading && data.total} <strong>Pokemons</strong> for you to choose your favorite
        </Heading>
        <div>
          <input
            className={style.search}
            type="text"
            value={searchValue}
            placeholder="Encuentra tu pokémon..."
            onChange={handleSearchChange}
          />
        </div>

        <div className={style.pokemons}>
          {!isLoading &&
            data.pokemons.map((card: iPokemon) => {
              return <PokemonCard pokemon={card} key={card.id} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default Home;
