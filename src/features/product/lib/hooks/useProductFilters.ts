import { useMemo, useState } from 'react';

import { useDebounce } from '@shared/lib/hooks/useDebounce';
import {
  calculateTotalPages,
  filterProducts,
  paginateProducts,
  sortProducts,
} from '@shared/lib/utils/productUtils';

import type { Product } from '@features/product/model/types.ts';

const PAGE_SIZE = 6;

export const useProductFilters = (products: Product[]) => {
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState<string | null>(null);
  const [page, setPage] = useState(1);

  const debouncedSearch = useDebounce(search, 300);

  const filteredAndSorted = useMemo(() => {
    const filtered = filterProducts(products, debouncedSearch);
    return sortProducts(filtered, sort);
  }, [products, debouncedSearch, sort]);

  const paginatedProducts = useMemo(() => {
    return paginateProducts(filteredAndSorted, page, PAGE_SIZE);
  }, [filteredAndSorted, page]);

  const totalPages = useMemo(() => {
    return calculateTotalPages(filteredAndSorted.length, PAGE_SIZE);
  }, [filteredAndSorted.length]);

  const resetPage = () => setPage(1);

  return {
    search,
    setSearch,
    sort,
    setSort,
    page,
    setPage,
    filteredProducts: filteredAndSorted,
    displayedProducts: paginatedProducts,
    totalPages,
    resetPage,
  };
};
