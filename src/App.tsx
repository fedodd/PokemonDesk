import React from 'react';

import { useRoutes } from 'hookrouter';
import routes from './routes';
import NoteFound from './pages/NotFound/NotFound';

const App = () => {
  const match = useRoutes(routes);
  return match || <NoteFound />;
};

export default App;
