import { Flex, Loader } from '@mantine/core';

import type { FC, ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

export const PageLoader: FC<Props> = ({ children }) => {
  if (children) return <>{children}</>;

  return (
    <Flex justify="center" align="center" h="100vh">
      <Loader size="lg" variant="dots" />
    </Flex>
  );
};
