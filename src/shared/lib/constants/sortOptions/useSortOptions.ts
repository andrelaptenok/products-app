import { ICONS_MAP } from '@shared/lib/constants/sortOptions/icons';

import { SORT_OPTIONS } from './sortOptions';

import type { SortOptionData } from '@shared/lib/constants/sortOptions/types';

export const useSortOptions = (): SortOptionData[] =>
  SORT_OPTIONS.map((option) => ({
    ...option,
    icon: ICONS_MAP[option.value],
  }));
