import React from 'react';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Button from '../../components/Button/Button';

import style from './Home.module.scss';

const Home = () => {
  return (
    <div className={style.root}>
      <Header />
      <div className={style.main}>
        <h1 className={style.title}>This is Home Component!</h1>
        <Button onClick={(event) => console.log('clicked!')}>See pokemons</Button>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
