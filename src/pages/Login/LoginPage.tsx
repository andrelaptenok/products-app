import React, { useState } from 'react';

import { Button, Container, Paper, Stack, TextInput, Title } from '@mantine/core';

import { useAuth } from '@shared/lib/hooks/useAuth';
import { ErrorAlert } from '@shared/ui';

import styles from './LoginPage.module.css';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [error, setError] = useState<string | null>(null);
  const { login } = useAuth();

  const handleLogin = () => {
    setError(null);
    const success = login(username);
    if (!success) {
      setError('Invalid login. Use "admin"');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  return (
    <Container size={420} className={styles.container}>
      <Paper shadow="md" p={30} radius="md" withBorder>
        <Stack gap="md">
          <Title order={2} ta="center">
            Login
          </Title>

          {error && <ErrorAlert message={error} />}

          <TextInput
            label="Username"
            placeholder="admin"
            value={username}
            onChange={(e) => setUsername(e.currentTarget.value)}
            onKeyPress={handleKeyPress}
            required
            aria-label="Username input"
            autoComplete="username"
          />

          <Button fullWidth onClick={handleLogin} mt="md" aria-label="Login button" type="button">
            Login
          </Button>
        </Stack>
      </Paper>
    </Container>
  );
};

export default LoginPage;
