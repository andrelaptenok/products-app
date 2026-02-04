import { useCallback, useEffect, useState } from 'react';

import { useProductFilters } from '@features/product/lib/hooks/useProductFilters';
import { useProducts } from '@features/product/lib/hooks/useProducts';
import { UserRole } from '@shared/lib';
import { useAuth } from '@shared/lib/hooks/useAuth';

import type { Product } from '@features/product/model/types';

export const useProductsPage = () => {
  const { products, loading, addProduct, updateProduct } = useProducts();
  const {
    search,
    setSearch,
    sort,
    setSort,
    page,
    setPage,
    displayedProducts,
    filteredProducts,
    resetPage,
    totalPages,
  } = useProductFilters(products);
  const { logout, hasRole } = useAuth();

  const [modalOpened, setModalOpened] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  const canAddProduct = hasRole(UserRole.ADMIN);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    resetPage();
    scrollToTop();
  }, [sort, search]);

  useEffect(() => {
    scrollToTop();
  }, [page, scrollToTop]);

  const openAddModal = () => {
    setEditingProduct(null);
    setModalOpened(true);
  };

  const openEditModal = (product: Product) => {
    setEditingProduct(product);
    setModalOpened(true);
  };

  const closeModal = () => {
    setModalOpened(false);
    setEditingProduct(null);
  };

  const submitProduct = async (product: Omit<Product, 'id'>) => {
    try {
      if (editingProduct) {
        await updateProduct(editingProduct.id, product);
      } else {
        await addProduct(product);
      }
      closeModal();
    } catch (err) {
      console.error(err);
    }
  };

  return {
    products,
    displayedProducts,
    loading,
    search,
    setSearch,
    sort,
    setSort,
    page,
    setPage,
    totalPages,
    canAddProduct,
    modalOpened,
    editingProduct,
    filteredProducts,
    openAddModal,
    openEditModal,
    closeModal,
    submitProduct,
    logout,
  };
};
