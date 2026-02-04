import { Group, Title } from '@mantine/core';

import type { ReactNode } from 'react';

interface Props {
  title: string;
  actions?: ReactNode;
}

export const PageHeader = ({ title, actions }: Props) => {
  return (
    <Group justify="space-between" mb="md">
      <Title order={1}>{title}</Title>
      <Group>{actions}</Group>
    </Group>
  );
};
