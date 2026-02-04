import { toast } from '@shared/ui';

import { ToastContext, type ToastStatus } from './ToastContext';

import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const ToastProvider = ({ children }: Props) => {
  const notify = (message: string, status: ToastStatus = 'info', title?: string) => {
    toast[status](message, title);
  };

  return <ToastContext.Provider value={{ notify }}>{children}</ToastContext.Provider>;
};
