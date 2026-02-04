import React, { type ReactNode } from 'react';

import { Navigate } from 'react-router-dom';

import { ROUTES } from '@shared/lib';
import { authService } from '@shared/lib/services/authService';

interface Props {
  children: ReactNode;
}

export const PublicRoute: React.FC<Props> = ({ children }) => {
  const isLoggedIn = authService.isAuthenticated();
  return !isLoggedIn ? <>{children}</> : <Navigate to={ROUTES.PRODUCTS} replace />;
};
