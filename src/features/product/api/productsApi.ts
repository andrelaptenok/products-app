import { apiClient } from '@shared/lib/api/apiClient';
import { apiPath } from '@shared/lib/config/apiPath';

import type { Product } from '@features/product/model/types';

export const fetchProducts = async (): Promise<Product[]> => {
  return apiClient.get<Product[]>(apiPath.products);
};

export const createProduct = async (product: Omit<Product, 'id'>): Promise<Product> => {
  return apiClient.post<Product>(apiPath.products, product);
};

export const updateProductApi = async (
  id: number,
  product: Omit<Product, 'id'>,
): Promise<Product> => {
  return apiClient.put<Product>(`${apiPath.products}/${id}`, product);
};
