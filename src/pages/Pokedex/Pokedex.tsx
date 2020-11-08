import React from 'react';

import Heading from '../../components/Heading/Heading';

import style from './Pokedex.module.scss';

const Home = () => {
  return (
    <div className={style.root}>
      <div>
        <Heading level="h1">Pokedex</Heading>
      </div>
    </div>
  );
};

export default Home;
