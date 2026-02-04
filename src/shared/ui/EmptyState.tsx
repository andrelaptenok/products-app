import React from 'react';

import { Center, Paper, Text, Title } from '@mantine/core';
import { IconInbox } from '@tabler/icons-react';

interface Props {
  title?: string;
  message?: string;
  icon?: React.ReactNode;
}

export const EmptyState = (props: Props) => {
  const { title = 'No items found', message, icon = <IconInbox size={48} /> } = props;
  return (
    <Center h={400}>
      <Paper p="xl" radius="md" withBorder>
        <Center mb="md">{icon}</Center>
        <Title order={3} c="dimmed" ta="center" mb={message ? 'xs' : 0}>
          {title}
        </Title>
        {message && (
          <Text size="sm" c="dimmed" ta="center">
            {message}
          </Text>
        )}
      </Paper>
    </Center>
  );
};
