import React from 'react';
import useData from '../../hook/getData';
import { PokemonRequest } from '../../interface/pokemons';

export interface PokemonProps {
  id: number | string;
}

const Pokemon: React.FC<PokemonProps> = ({ id }) => {
  const { data, isLoading } = useData<PokemonRequest>('getPokemon', { id });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <div>This is {data && data.name}!</div>;
};

export default Pokemon;
