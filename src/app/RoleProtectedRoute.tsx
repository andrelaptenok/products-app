import { Navigate } from 'react-router-dom';

import { ROUTES } from '@shared/lib';
import { authService } from '@shared/lib/services/authService';

import type { UserRole } from '@shared/lib/constants/userRoles';
import type { ReactNode } from 'react';

interface RoleProtectedRouteProps {
  children: ReactNode;
  requiredRole: UserRole;
  fallback?: ReactNode;
}

export const RoleProtectedRoute = ({
  children,
  requiredRole,
  fallback,
}: RoleProtectedRouteProps) => {
  const isAuthenticated = authService.isAuthenticated();
  const hasRequiredRole = authService.hasRole(requiredRole);

  if (!isAuthenticated) {
    return <Navigate to={ROUTES.LOGIN} replace />;
  }

  if (!hasRequiredRole) {
    return fallback ? <>{fallback}</> : <Navigate to={ROUTES.PRODUCTS} replace />;
  }

  return <>{children}</>;
};
