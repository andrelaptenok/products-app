import { HttpStatus } from '@shared/lib';

import type { ApiError } from '@shared/lib';

export const getErrorMessage = (error: unknown): string => {
  if (error && typeof error === 'object' && 'status' in error && 'statusText' in error) {
    const apiError = error as ApiError;
    switch (apiError.status) {
      case HttpStatus.NOT_FOUND:
        return apiError.message.includes('not found')
          ? apiError.message
          : 'Resource not found. Please check the URL or try again later.';
      case HttpStatus.UNAUTHORIZED:
        return 'Unauthorized access. Please log in again.';
      case HttpStatus.FORBIDDEN:
        return 'Access forbidden. You do not have permission to access this resource.';
      case HttpStatus.BAD_REQUEST:
        return 'Invalid request. Please check your input and try again.';
      case HttpStatus.INTERNAL_SERVER_ERROR:
        return 'Server error. Please try again later.';
      case 0:
        return 'Network error. Please check your internet connection.';
      default:
        return apiError.message || `An error occurred (${apiError.status})`;
    }
  }

  if (error instanceof Error) {
    return error.message;
  }

  return 'An unexpected error occurred';
};
