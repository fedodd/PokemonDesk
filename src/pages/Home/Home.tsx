import React from 'react';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Button from '../../components/Button/Button';
import Parallax from '../../components/Parallax/Parallax';
import Heading from '../../components/Heading/Heading';

import style from './Home.module.scss';

const Home = () => {
  return (
    <div className={style.root}>
      <Header />
      <div className={style.main}>
        <div>
          {/* <h1 className={style.title}>
            
          </h1> */}
          <div className={style.title}>
            <Heading level="h1">
              <strong>Find</strong> all your favorite <strong>Pokemon</strong>
            </Heading>
          </div>
          <p className={style.description}>
            You can know the type of Pokemon, its strengths, disadvantages and abilities
          </p>
          <Button onClick={(event) => console.log('clicked!')}>See pokemons</Button>
        </div>
        <Parallax />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
