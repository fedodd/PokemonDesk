import React, { useEffect, useState } from 'react';

import Heading from '../../components/Heading/Heading';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import useData from '../../hook/getData';

import style from './Pokedex.module.scss';

import { IPokemons, PokemonRequest } from '../../interface/pokemons';
import useDebounce from '../../hook/useDebounce';

interface IQuery {
  name?: string;
}

const Home = () => {
  const [searchValue, setSearchValue] = useState('');
  const [query, setQuery] = useState<IQuery>({});
  // const query = useMemo(
  //   () => ({
  //     name: searchValue,
  //   }),
  //   [searchValue],
  // );

  const debouncedValue = useDebounce(searchValue, 500);

  const { data, isLoading, isFalse } = useData<IPokemons>('getPokemons', query, [debouncedValue]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setQuery((state: IQuery) => ({
      ...state,
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
          {!isLoading && data && data.total} <strong>Pokemons</strong> for you to choose your favorite
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
            data &&
            data.pokemons.map((card: PokemonRequest) => {
              return <PokemonCard pokemon={card} key={card.id} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default Home;
