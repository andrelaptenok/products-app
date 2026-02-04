import { Group, Select, Text } from '@mantine/core';

import type { SortOptionData } from '@shared/lib/constants/sortOptions/types';

interface Props {
  value: string | null;
  onChange: (value: string | null) => void;
  options: SortOptionData[];
  ariaLabel?: string;
  className?: string;
}

export const SortSelect = ({ value, onChange, ariaLabel, options, className }: Props) => {
  const selectData = options.map(({ value, label }) => ({ value, label }));
  const selectedOption = options.find((opt) => opt.value === value);

  return (
    <Select
      placeholder="Sort"
      data={selectData}
      value={value}
      onChange={onChange}
      clearable
      aria-label={ariaLabel}
      leftSection={selectedOption?.icon}
      className={className}
      renderOption={({ option }) => {
        const sortOption = options.find((opt) => opt.value === option.value);
        return (
          <Group gap="xs" wrap="nowrap">
            {sortOption?.icon}
            <Text size="sm">{sortOption?.label}</Text>
          </Group>
        );
      }}
    />
  );
};
