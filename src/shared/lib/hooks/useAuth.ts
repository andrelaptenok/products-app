import { useNavigate } from 'react-router-dom';

import { authService, ROUTES, USER_CREDENTIALS, type UserRole } from '@shared/lib';

export const useAuth = () => {
  const navigate = useNavigate();

  const login = (username: string): boolean => {
    const role = USER_CREDENTIALS[username.toLowerCase()];
    if (role) {
      authService.login(role);
      navigate(ROUTES.PRODUCTS);
      return true;
    }
    return false;
  };

  const logout = (): void => {
    authService.logout();
    navigate(ROUTES.LOGIN);
  };

  const isAuthenticated = (): boolean => {
    return authService.isAuthenticated();
  };

  const getRole = (): UserRole | null => {
    return authService.getRole();
  };

  const hasRole = (requiredRole: UserRole): boolean => {
    return authService.hasRole(requiredRole);
  };

  return { login, logout, isAuthenticated, getRole, hasRole };
};
