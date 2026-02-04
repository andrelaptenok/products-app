import { Badge, Center, Container, Group, Pagination, SimpleGrid, Stack } from '@mantine/core';

import { ProductCard } from '@features/product/components/ProductCard/ProductCard';
import { ProductFormModal } from '@features/product/components/ProductFormModal';
import { ProductsPageHeader } from '@pages/Products/ui/ProductsPageHeader';
import { useProductsPage } from '@shared/lib/hooks/useProductsPage';
import { useSortOptions } from '@shared/lib/hooks/useSortOptions';
import { EmptyState, LoadingSpinner, SearchInput, SortSelect } from '@shared/ui';

import styles from './ProductsPage.module.css';

export const ProductsPage = () => {
  const {
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
    openAddModal,
    openEditModal,
    closeModal,
    submitProduct,
    logout,
  } = useProductsPage();

  const sortOptions = useSortOptions();

  return (
    <Container size="xl" py="xl">
      <Stack gap="lg">
        <ProductsPageHeader canAddProduct={canAddProduct} onAdd={openAddModal} onLogout={logout} />

        <Group className={styles.filters}>
          <SearchInput
            placeholder="Search by title..."
            value={search}
            onChange={setSearch}
            className={styles.searchInput}
            ariaLabel="Search products"
          />
          <SortSelect
            value={sort}
            onChange={setSort}
            options={sortOptions}
            className={styles.sortOptions}
          />
        </Group>
        <Badge size="xl" w="120" variant="outline" color="blue">
          {products.length !== 0 && `Total:${products.length}`}
        </Badge>

        {search?.length > 0 && displayedProducts.length === 0 && !loading && (
          <EmptyState title="No products found" />
        )}

        {loading ? (
          <Center>
            <LoadingSpinner />
          </Center>
        ) : (
          <>
            <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
              {displayedProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onEdit={() => openEditModal(product)}
                />
              ))}
            </SimpleGrid>

            {totalPages > 1 && (
              <Center>
                <Pagination value={page} onChange={setPage} total={totalPages} />
              </Center>
            )}
          </>
        )}
      </Stack>

      <ProductFormModal
        opened={modalOpened}
        onClose={closeModal}
        onSubmit={submitProduct}
        initialValues={editingProduct || undefined}
      />
    </Container>
  );
};

export default ProductsPage;
