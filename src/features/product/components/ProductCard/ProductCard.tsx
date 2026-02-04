import { Badge, Button, Card, Group, Image, Stack, Text } from '@mantine/core';
import { IconCategory, IconEdit } from '@tabler/icons-react';

import styles from './ProductCard.module.css';

import type { Product } from '@features/product/model/types.ts';

interface Props {
  product: Product;
  onEdit?: () => void;
}

export const ProductCard = ({ product, onEdit }: Props) => {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder h="100%">
      <Card.Section>
        <Image src={product.image} height={200} alt={product.title} fit="cover" />
      </Card.Section>

      <Stack gap="xs" mt="md" className={styles.blockSize}>
        <Group justify="space-between" align="flex-start">
          <Text fw={600} size="lg" lineClamp={2} className={styles.blockSize}>
            {product.title}
          </Text>
          <Badge color="green" variant="light" size="lg">
            ${product.price.toFixed(2)}
          </Badge>
        </Group>

        <Group gap={4}>
          <IconCategory size={14} />
          <Text size="sm" c="dimmed">
            {product.category}
          </Text>
        </Group>

        <Text size="sm" c="dimmed" lineClamp={3} className={styles.blockSize}>
          {product.description}
        </Text>

        {onEdit && (
          <Button
            leftSection={<IconEdit size={16} />}
            variant="light"
            fullWidth
            mt="auto"
            onClick={onEdit}
            aria-label={`Edit product ${product.title}`}
          >
            Edit
          </Button>
        )}
      </Stack>
    </Card>
  );
};
