import type { Product } from '@features/product/model/types';

export const filterProducts = (products: Product[], search: string): Product[] => {
  if (!search.trim()) return products;
  return products.filter((p) => p.title.toLowerCase().includes(search.toLowerCase()));
};

export const sortProducts = (products: Product[], sort: string | null): Product[] => {
  if (!sort) return products;

  const sorted = [...products];

  switch (sort) {
    case 'price-asc':
      return sorted.sort((a, b) => a.price - b.price);
    case 'price-desc':
      return sorted.sort((a, b) => b.price - a.price);
    case 'title-asc':
      return sorted.sort((a, b) => a.title.localeCompare(b.title));
    case 'title-desc':
      return sorted.sort((a, b) => b.title.localeCompare(a.title));
    default:
      return sorted;
  }
};

export const paginateProducts = (
  products: Product[],
  page: number,
  pageSize: number,
): Product[] => {
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  return products.slice(startIndex, endIndex);
};

export const calculateTotalPages = (totalItems: number, pageSize: number): number => {
  return Math.ceil(totalItems / pageSize);
};
