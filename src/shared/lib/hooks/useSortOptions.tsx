import { IconArrowDown, IconArrowUp, IconSortAZ, IconSortZA } from '@tabler/icons-react';

import { SORT_OPTIONS } from '@shared/lib/constants/sortOptions/sortOptions.ts';

import type { SortOptionData } from '@shared/lib/constants/sortOptions/types.ts';
import type { ReactNode } from 'react';

const ICONS_MAP: Record<string, ReactNode> = {
  ['price-asc']: <IconArrowUp size={16} />,
  ['price-desc']: <IconArrowDown size={16} />,
  ['title-asc']: <IconSortAZ size={16} />,
  ['title-desc']: <IconSortZA size={16} />,
};

export const useSortOptions = (): SortOptionData[] => {
  return SORT_OPTIONS.map((option) => ({
    ...option,
    icon: ICONS_MAP[option.value] || null,
  }));
};
