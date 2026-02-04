import { ActionIcon, TextInput } from '@mantine/core';
import { IconSearch, IconX } from '@tabler/icons-react';

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
      rightSection={
        value && (
          <ActionIcon size={16} variant="outline" onClick={() => onChange('')}>
            <IconX size={16} />
          </ActionIcon>
        )
      }
      aria-label={ariaLabel}
      className={className}
    />
  );
};
