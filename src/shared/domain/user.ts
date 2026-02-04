export const UserRole = {
  ADMIN: 'admin',
} as const;

export type UserRole = (typeof UserRole)[keyof typeof UserRole];

export const USER_CREDENTIALS: Record<string, UserRole> = {
  admin: UserRole.ADMIN,
} as const;

