import { useEffect } from 'react';

import { Button, Group, Modal, NumberInput, Stack, Textarea, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';

import { getProductFormInitialValues, productFormValidation } from '@features/product/lib';

import type { Product } from '@features/product/model/types';

interface Props {
  opened: boolean;
  onClose: () => void;
  onSubmit: (product: Omit<Product, 'id'>) => void;
  initialValues?: Omit<Product, 'id'>;
}

export const ProductFormModal = ({ opened, onClose, onSubmit, initialValues }: Props) => {
  const form = useForm<Omit<Product, 'id'>>({
    initialValues: getProductFormInitialValues(),
    validate: productFormValidation,
  });

  useEffect(() => {
    if (opened) {
      if (initialValues) {
        form.setValues(initialValues);
      } else {
        form.reset();
      }
    }
  }, [opened, initialValues]);

  const handleSubmit = (values: Omit<Product, 'id'>) => {
    onSubmit(values);
  };

  const isEditMode = !!initialValues;

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title={isEditMode ? 'Edit Product' : 'Add Product'}
      size="lg"
    >
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack gap="md">
          <TextInput
            label="Title"
            {...form.getInputProps('title')}
            required
            aria-label="Product title"
            autoComplete="off"
          />
          <NumberInput
            label="Price"
            {...form.getInputProps('price')}
            required
            min={0}
            decimalScale={2}
            prefix="$"
            aria-label="Product price"
          />
          <Textarea
            label="Description"
            {...form.getInputProps('description')}
            required
            minRows={6}
            aria-label="Product description"
          />
          <TextInput
            label="Category"
            {...form.getInputProps('category')}
            required
            aria-label="Product category"
            autoComplete="off"
          />
          <TextInput
            label="Image URL"
            {...form.getInputProps('image')}
            required
            aria-label="Product image URL"
            autoComplete="off"
          />

          <Group justify="flex-end" mt="md">
            <Button variant="subtle" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">{isEditMode ? 'Save' : 'Add'}</Button>
          </Group>
        </Stack>
      </form>
    </Modal>
  );
};
