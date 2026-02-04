import { AUTH_STORAGE_KEY } from '@shared/lib/config/storage.ts';

import type { UserRole } from '@shared/lib';

const ROLE_STORAGE_KEY = 'userRole';

export const authService = {
  login: (role: UserRole): void => {
    localStorage.setItem(AUTH_STORAGE_KEY, 'true');
    localStorage.setItem(ROLE_STORAGE_KEY, role);
  },

  logout: (): void => {
    localStorage.removeItem(AUTH_STORAGE_KEY);
    localStorage.removeItem(ROLE_STORAGE_KEY);
  },

  isAuthenticated: (): boolean => {
    return localStorage.getItem(AUTH_STORAGE_KEY) === 'true';
  },

  getRole: (): UserRole | null => {
    const role = localStorage.getItem(ROLE_STORAGE_KEY);
    return role as UserRole | null;
  },

  hasRole: (requiredRole: UserRole): boolean => {
    const currentRole = authService.getRole();
    if (!currentRole) return false;

    const roleHierarchy: Record<UserRole, number> = {
      admin: 1,
    };

    return roleHierarchy[currentRole] >= roleHierarchy[requiredRole];
  },
};
