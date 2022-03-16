import React from 'react';
import { BrowserRouter, Routes as RouterRoutes, Route } from 'react-router-dom';

import { Home } from './pages/home/home-page';

export interface RoutesProps {}

export const Routes: React.FC<RoutesProps> = () => {
  return (
    <BrowserRouter>
      <RouterRoutes>
        <Route path="/" element={<Home />} />
      </RouterRoutes>
    </BrowserRouter>
  );
};
