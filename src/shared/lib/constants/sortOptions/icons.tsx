import { IconArrowDown, IconArrowUp, IconSortAZ, IconSortZA } from '@tabler/icons-react';

import type { SortOptionValue } from './types';
import type { ReactNode } from 'react';

export const ICONS_MAP: Record<SortOptionValue, ReactNode> = {
  'price-asc': <IconArrowUp size={16} />,
  'price-desc': <IconArrowDown size={16} />,
  'title-asc': <IconSortAZ size={16} />,
  'title-desc': <IconSortZA size={16} />,
};
