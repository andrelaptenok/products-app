import { ICONS_MAP } from '@shared/lib/constants/sortOptions/icons.tsx';

import { SORT_OPTIONS } from './sortOptions';

import type { SortOptionData } from '@shared/lib/constants/sortOptions/types.ts';

export const useSortOptions = (): SortOptionData[] =>
  SORT_OPTIONS.map((option) => ({
    ...option,
    icon: ICONS_MAP[option.value],
  }));
