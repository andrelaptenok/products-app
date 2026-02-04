import { Navigate } from 'react-router-dom';

import { ROUTES } from '@shared/lib';
import { authService } from '@shared/lib/services/authService';

import type { ReactNode } from 'react';

interface ProtectedRouteProps {
  children: ReactNode;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const isLoggedIn = authService.isAuthenticated();
  return isLoggedIn ? <>{children}</> : <Navigate to={ROUTES.LOGIN} replace />;
};
