import { Center, Loader } from '@mantine/core';

interface Props {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  height?: number | string;
}

export const LoadingSpinner = ({ size = 'lg', height = 400 }: Props) => {
  return (
    <Center h={height}>
      <Loader size={size} />
    </Center>
  );
};
