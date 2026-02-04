import { Alert } from '@mantine/core';
import { IconAlertCircle } from '@tabler/icons-react';

interface Props {
  message: string;
  onClose?: () => void;
}

export const ErrorAlert = ({ message, onClose }: Props) => {
  return (
    <Alert
      icon={<IconAlertCircle size={16} />}
      title="Error"
      color="red"
      withCloseButton={!!onClose}
      onClose={onClose}
      mb="md"
    >
      {message}
    </Alert>
  );
};
