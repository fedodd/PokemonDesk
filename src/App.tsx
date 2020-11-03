import React from 'react';

import cn from 'classnames';
import style from './App.module.scss';

const App = () => {
  console.log('###: Some log');
  console.log('###: Some log 2');
  console.log('###: Some log 2');
  console.log('###: Some log');
  console.log('###: Some log 2');
  console.log('###: Some log 2');
  return (
    <div>






      <h1 className={cn(style.header, 'color')}>This is App Component!</h1>



    </div>
  );
};

export default App;
