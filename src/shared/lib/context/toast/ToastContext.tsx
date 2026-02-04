import { createContext, useContext } from 'react';

export type ToastStatus = 'success' | 'error' | 'info';

export interface ToastContextType {
  notify: (message: string, status?: ToastStatus, title?: string) => void;
}

export const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) throw new Error('useToast must be used within ToastProvider');
  return context;
};
