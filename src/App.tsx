import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';

import Layout from './pages/Layout/Layout';
import HomePage from './pages/Home/Home';
import PokedexPage from './pages/Pokedex/Pokedex';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import style from './App.module.scss';

const App = () => {
  return (
    <BrowserRouter>
      <Route
        render={() => (
          <div className={style.app}>
            <Header />
            <Layout>
              <Route path="/" exact component={HomePage} />
              <Route path="/home" component={HomePage} />
              <Route path="/Pokedex" component={PokedexPage} />
            </Layout>
            <Footer />
          </div>
        )}
      />
    </BrowserRouter>
  );
};

export default App;
