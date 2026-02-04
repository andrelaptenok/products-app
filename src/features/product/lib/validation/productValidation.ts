import type { Product } from '@features/product/model/types';

export const productFormValidation = {
  title: (value: string) => (value.trim().length > 0 ? null : 'Enter title'),
  price: (value: number) => (value > 0 ? null : 'Price must be greater than 0'),
  description: (value: string) => (value.trim().length > 0 ? null : 'Enter description'),
  category: (value: string) => (value.trim().length > 0 ? null : 'Enter category'),
  image: (value: string) => {
    if (value.trim().length === 0) return 'Enter image URL';
    try {
      new URL(value);
      return null;
    } catch {
      return 'Enter a valid URL';
    }
  },
};

export const getProductFormInitialValues = (): Omit<Product, 'id'> => ({
  title: '',
  price: 0,
  description: '',
  category: '',
  image: '',
});
