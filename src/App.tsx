import React from 'react';

import cn from 'classnames';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import style from './App.module.scss';

const App = () => {
  return (
    <div>
      <Header />
      <div>
        <h1 className={style.title}>This is App Component!</h1>
      </div>
      <Footer />
    </div>
  );
};

export default App;
