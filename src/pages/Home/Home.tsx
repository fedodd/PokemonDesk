import React from 'react';
import { navigate } from 'hookrouter';
import Button from '../../components/Button/Button';
import Parallax from '../../components/Parallax/Parallax';
import Heading from '../../components/Heading/Heading';

import style from './Home.module.scss';

import { LinkEnum } from '../../routes';

const Home = () => {
  return (
    <div className={style.root}>
      <div className={style.main}>
        <div>
          <div className={style.title}>
            <Heading level="h1">
              <strong>Find</strong> all your favorite <strong>Pokemon</strong>
            </Heading>
          </div>
          <p className={style.description}>
            You can know the type of Pokemon, its strengths, disadvantages and abilities
          </p>
          <Button onClick={() => navigate(LinkEnum.POKEDEX)} color="green">
            See pokemons
          </Button>
        </div>
        <Parallax />
      </div>
    </div>
  );
};

export default Home;
