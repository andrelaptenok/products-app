import { TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

interface Props {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  ariaLabel?: string;
}

export const SearchInput = (props: Props) => {
  const { value, onChange, placeholder = 'Search...', className, ariaLabel } = props;
  return (
    <TextInput
      placeholder={placeholder}
      leftSection={<IconSearch size={16} />}
      value={value}
      onChange={(e) => onChange(e.currentTarget.value)}
      aria-label={ariaLabel}
      className={className}
    />
  );
};
