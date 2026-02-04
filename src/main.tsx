import React from 'react';

import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import ReactDOM from 'react-dom/client';

import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';

import { AppRoutes } from '@app/AppRoutes';
import { ToastProvider } from '@shared/lib/context/toast/ToastProvider.tsx';
import { theme } from '@shared/lib/theme';

import './index.css';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Root element not found');

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <MantineProvider theme={theme}>
      <Notifications position="bottom-left" zIndex={1000} />
      <ToastProvider>
        <AppRoutes />
      </ToastProvider>
    </MantineProvider>
  </React.StrictMode>,
);
