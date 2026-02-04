import { Button } from '@mantine/core';

import type { ReactNode } from 'react';

interface Props {
  label: string;
  onClick: () => void;
  icon?: ReactNode;
  variant?: 'filled' | 'light' | 'outline' | 'subtle';
  color?: string;
  leftSection?: ReactNode;
  ariaLabel?: string;
  disabled?: boolean;
}

export const ActionButton = (props: Props) => {
  const {
    label,
    onClick,
    icon,
    variant = 'filled',
    color,
    leftSection,
    ariaLabel,
    disabled,
  } = props;
  return (
    <Button
      leftSection={leftSection || icon}
      variant={variant}
      color={color}
      onClick={onClick}
      aria-label={ariaLabel || label}
      disabled={disabled}
    >
      {label}
    </Button>
  );
};
