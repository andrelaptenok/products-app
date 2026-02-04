import { notifications } from '@mantine/notifications';
import { IconCheck, IconInfoCircle, IconX } from '@tabler/icons-react';

export const toast = {
  success: (message: string, title?: string) => {
    notifications.show({
      title: title || 'Success',
      message,
      color: 'green',
      icon: <IconCheck size={18} />,
      withCloseButton: true,
      autoClose: 3000,
    });
  },

  error: (message: string | null, title?: string) => {
    notifications.show({
      title: title || 'Error',
      message,
      color: 'red',
      icon: <IconX size={18} />,
      withCloseButton: true,
      autoClose: 5000,
    });
  },

  info: (message: string, title?: string) => {
    notifications.show({
      title: title || 'Info',
      message,
      color: 'blue',
      icon: <IconInfoCircle size={18} />,
      withCloseButton: true,
      autoClose: 4000,
    });
  },
};
