import React from 'react';
import Button from '../../components/Button/Button';
import Parallax from '../../components/Parallax/Parallax';
import Heading from '../../components/Heading/Heading';

import style from './Home.module.scss';

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
          <Button onClick={() => null}>See pokemons</Button>
        </div>
        <Parallax />
      </div>
    </div>
  );
};

export default Home;
