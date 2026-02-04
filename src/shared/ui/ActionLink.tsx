import { Link } from 'react-router-dom';

import { Button } from '@mantine/core';

import type { ReactNode } from 'react';

interface Props {
  label: string;
  href: string;
  variant?: 'filled' | 'light' | 'outline' | 'subtle';
  color?: string;
  leftSection?: ReactNode;
  icon?: ReactNode;
  ariaLabel?: string;
  target?: '_blank' | '_self';
}

export const ActionLink = (props: Props) => {
  const { label, href, variant = 'filled', color, leftSection, icon, ariaLabel, target } = props;
  return (
    <Button
      component={Link}
      to={href}
      target={target}
      variant={variant}
      color={color}
      aria-label={ariaLabel}
      leftSection={leftSection || icon}
    >
      {label}
    </Button>
  );
};
