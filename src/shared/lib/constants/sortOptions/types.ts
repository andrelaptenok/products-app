import type { ReactNode } from 'react';

export type SortOptionValue = 'price-asc' | 'price-desc' | 'title-asc' | 'title-desc';

export interface SortOptionData {
  value: SortOptionValue;
  label: string;
  icon?: ReactNode;
}
