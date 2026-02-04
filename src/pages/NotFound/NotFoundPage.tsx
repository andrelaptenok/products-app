import { useNavigate } from 'react-router-dom';

import { Container, Group, Paper, Stack, Text, Title } from '@mantine/core';
import { IconArrowLeft, IconHome, IconMoodSad } from '@tabler/icons-react';

import { ROUTES } from '@shared/lib';
import { ActionButton } from '@shared/ui';
import { ActionLink } from '@shared/ui/ActionLink.tsx';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <Container size="md" py="xl">
      <Stack align="center" gap="xl" mt="10vh">
        <Paper p="xl" radius="md" withBorder>
          <Stack align="center" gap="lg">
            <IconMoodSad size={80} />

            <Title order={1} size="6rem" fw={900} c="dimmed">
              404
            </Title>

            <Stack align="center" gap="sm">
              <Title order={2} ta="center">
                Page Not Found
              </Title>
              <Text size="lg" c="dimmed" ta="center" maw={500}>
                The page you are looking for doesn't exist or has been moved to another location.
              </Text>
            </Stack>

            <Group gap="md" mt="md">
              <ActionLink
                href={ROUTES.PRODUCTS}
                label="Home"
                leftSection={<IconHome size={18} />}
              />
              <ActionButton
                label="Back"
                onClick={() => navigate(-1)}
                variant="outline"
                leftSection={<IconArrowLeft size={18} />}
              />
            </Group>
          </Stack>
        </Paper>
      </Stack>
    </Container>
  );
};

export default NotFoundPage;
