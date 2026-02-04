import { useCallback, useEffect, useRef, useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

import { createProduct, fetchProducts, updateProductApi } from '@features/product/api/productsApi';
import { useToast } from '@shared/lib/context/toast/useToast';
import { getErrorMessage } from '@shared/lib/utils/errorUtils';

import type { Product } from '@features/product/model/types';

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const hasLoadedRef = useRef(false);

  const { notify } = useToast();

  const handleError = useCallback(
    (err: unknown) => {
      const message = getErrorMessage(err);
      notify(message, 'error');
      console.error(message, err);
      throw err;
    },
    [notify],
  );

  const loadProducts = useCallback(async () => {
    if (hasLoadedRef.current) return;
    hasLoadedRef.current = true;

    setLoading(true);
    try {
      const data = await fetchProducts();
      setProducts(data);
    } catch (err) {
      handleError(err);
    } finally {
      setLoading(false);
    }
  }, [handleError]);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  const addProduct = useCallback(
    async (product: Omit<Product, 'id'>) => {
      const tempId = Number(
        uuidv4()
          .replace(/[^0-9]/g, '')
          .slice(0, 12),
      );
      const tempProduct: Product = { ...product, id: tempId };

      setProducts((prev) => [tempProduct, ...prev]);

      try {
        const newProduct = await createProduct(product);

        setProducts((prev) =>
          prev.map((el) => (el.id === tempId ? { ...newProduct, id: tempId } : el)),
        );

        notify('Product added', 'success');
      } catch (err) {
        setProducts((prev) => prev.filter((el) => el.id !== tempId));
        handleError(err);
      }
    },
    [handleError],
  );

  const updateProduct = useCallback(
    async (id: number, product: Omit<Product, 'id'>) => {
      let original: Product | undefined;
      setProducts((prev) => {
        original = prev.find((p) => p.id === id);
        return prev.map((p) => (p.id === id ? { id, ...product } : p));
      });

      try {
        const updated = await updateProductApi(id, product);
        setProducts((prev) => prev.map((el) => (el.id === id ? updated : el)));
        notify('Product updated', 'success');
      } catch (err) {
        if (original) {
          setProducts((prev) => prev.map((el) => (el.id === id ? original! : el)));
        }
        handleError(err);
      }
    },
    [handleError],
  );

  return { products, loading, addProduct, updateProduct };
};
