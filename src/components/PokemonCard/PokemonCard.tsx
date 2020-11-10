import React from 'react';
import Heading from '../Heading/Heading';

import s from './PokemonCard.module.scss';

interface IPokemon {
  name_clean: string;
  // abilities: string[];
  stats: {
    // hp: number;
    attack: number;
    defense: number;
    // 'special-attack': number;
    // 'special-defense': number;
    // speed: number;
  };
  types: string[];
  img: string;
  name: string;
  // base_experience: number;
  // height: number;
  id: number;
  // is_default: boolean;
  // order: number;
  // weight: number;
}

interface PokemonCardProps {
  pokemon: IPokemon;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ children, pokemon }) => {
  return (
    <div className={s.root}>
      <div className={s.infoWrap}>
        <Heading level="h6" className={s.titleName}>
          {pokemon.name_clean}
        </Heading>
        <div className={s.statWrap}>
          <div className={s.statItem}>
            <div className={s.statValue}>{pokemon.stats.attack}</div>
            Attack
          </div>
          <div className={s.statItem}>
            <div className={s.statValue}>{pokemon.stats.defense}</div>
            Defense
          </div>
        </div>
        <div className={s.labelWrap}>
          <span className={s.label}>{pokemon.types.join(' ')}</span>
        </div>
      </div>
      <div className={s.pictureWrap}>
        <img src={pokemon.img} alt={pokemon.name} />
      </div>
    </div>
  );
};

export default PokemonCard;
