import React from 'react';
import { BrowserRouter, Routes as RouterRoutes, Route } from 'react-router-dom';

import { HomePage } from './pages/home-page/home-page';
import { RegisterPage } from './pages/register-page/register-page';
import { ActivationPage } from './pages/activation-page/activation-page';

export interface RoutesProps {}

export const Routes: React.FC<RoutesProps> = () => {
  return (
    <BrowserRouter>
      <RouterRoutes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/activate" element={<ActivationPage />} />
      </RouterRoutes>
    </BrowserRouter>
  );
};
