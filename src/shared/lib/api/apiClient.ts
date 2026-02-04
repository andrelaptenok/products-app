import { API_URL } from '@shared/lib/config/env.ts';

export const HttpStatus = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
} as const;

export type HttpStatus = (typeof HttpStatus)[keyof typeof HttpStatus];

export interface ApiError extends Error {
  status: number;
  statusText: string;
}

export const createApiError = (message: string, status: number, statusText: string): ApiError => {
  const error = new Error(message) as ApiError;
  error.name = 'ApiError';
  error.status = status;
  error.statusText = statusText;
  return error;
};

export const apiClient = {
  async get<T>(endpoint: string): Promise<T> {
    try {
      const response = await fetch(`${API_URL}${endpoint}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        const errorMessage =
          response.status === HttpStatus.NOT_FOUND
            ? `Resource not found: ${endpoint}`
            : `Request failed: ${response.statusText}`;
        throw createApiError(errorMessage, response.status, response.statusText);
      }

      return response.json();
    } catch (error) {
      if (error && typeof error === 'object' && 'status' in error && 'statusText' in error) {
        throw error;
      }
      if (error instanceof Error) {
        throw createApiError(error.message, 0, 'Network Error');
      }
      throw createApiError('Unknown error occurred', 0, 'Unknown');
    }
  },

  async post<T>(endpoint: string, data: unknown): Promise<T> {
    try {
      const response = await fetch(`${API_URL}${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorMessage =
          response.status === HttpStatus.NOT_FOUND
            ? `Resource not found: ${endpoint}`
            : `Request failed: ${response.statusText}`;
        throw createApiError(errorMessage, response.status, response.statusText);
      }

      return response.json();
    } catch (error) {
      if (error && typeof error === 'object' && 'status' in error && 'statusText' in error) {
        throw error;
      }
      if (error instanceof Error) {
        throw createApiError(error.message, 0, 'Network Error');
      }
      throw createApiError('Unknown error occurred', 0, 'Unknown');
    }
  },

  async put<T>(endpoint: string, data: unknown): Promise<T> {
    try {
      const response = await fetch(`${API_URL}${endpoint}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorMessage =
          response.status === HttpStatus.NOT_FOUND
            ? `Resource not found: ${endpoint}`
            : `Request failed: ${response.statusText}`;
        throw createApiError(errorMessage, response.status, response.statusText);
      }

      return response.json();
    } catch (error) {
      if (error && typeof error === 'object' && 'status' in error && 'statusText' in error) {
        throw error;
      }
      if (error instanceof Error) {
        throw createApiError(error.message, 0, 'Network Error');
      }
      throw createApiError('Unknown error occurred', 0, 'Unknown');
    }
  },
};
