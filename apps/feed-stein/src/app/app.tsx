import React from 'react';

import { Providers } from './providers';
import { Routes } from './routes';

export const App = () => {
  return (
    <Providers>
      <Routes />
    </Providers>
  );
};

export default App;
