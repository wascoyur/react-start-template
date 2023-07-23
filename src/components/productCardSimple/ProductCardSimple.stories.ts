import { Meta, StoryObj } from '@storybook/react';
import { ProductCardSimple } from './ProductCardSimple';

const meta: Meta<typeof ProductCardSimple> = {
  component: ProductCardSimple,
};

export default meta;
type Story = StoryObj<typeof ProductCardSimple>;

export const Default: Story = {
  args: {
    title: 'Название',
    description: 'Описание',
    previewImage: 'https://dummyimage.com/600x400/1ea7fd/fff',
    price: 10,
  },
};

export const WithEllipsis: Story = {
  args: {
    title: 'Очень длинное название продукта на несколько строк',
    description: 'Очень длинное описание продукта на несколько строк',
    previewImage: 'https://dummyimage.com/600x400/1ea7fd/fff',
    price: 10,
  },
};
