import { Group, Paper } from '@mantine/core';
import { IconLogout, IconPlus } from '@tabler/icons-react';

import { ActionButton, PageHeader } from '@shared/ui';

interface Props {
  canAddProduct: boolean;
  onAdd: () => void;
  onLogout: () => void;
}

export const ProductsPageHeader = ({ canAddProduct, onAdd, onLogout }: Props) => (
  <Paper p="md" radius="md" withBorder>
    <PageHeader
      title="Products Catalog"
      actions={
        <Group>
          {canAddProduct && (
            <ActionButton
              label="Add Product"
              onClick={onAdd}
              leftSection={<IconPlus size={16} />}
            />
          )}
          <ActionButton
            label="Logout"
            onClick={onLogout}
            variant="light"
            color="red"
            leftSection={<IconLogout size={16} />}
          />
        </Group>
      }
    />
  </Paper>
);
