import { useContext } from 'react';

import { ToastContext } from './ToastContext.tsx';

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useError must be used within an ErrorProvider');
  }
  return context;
};
