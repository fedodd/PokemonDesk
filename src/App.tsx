import React from 'react';

import { useRoutes } from 'hookrouter';
import routes from './routes';
import NoteFound from './pages/NotFound/NotFound';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const App = () => {
  const match = useRoutes(routes);
  return match ? (
    <>
      <Header />
      {match}
      <Footer />
    </>
  ) : (
    <NoteFound />
  );
};

export default App;
