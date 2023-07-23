import { Meta, StoryObj } from '@storybook/react';
import { ProductCardFull } from './ProductCardFull';

const meta: Meta<typeof ProductCardFull> = {
  component: ProductCardFull,
};

export default meta;
type Story = StoryObj<typeof ProductCardFull>;

export const Default: Story = {
  args: {
    title: 'Название',
    description: 'Описание',
    category: 'New',
    previewImages: [
      'https://dummyimage.com/600x400/1ea7fd/fff',
      'https://dummyimage.com/600x400/c900c9/fff',
      'https://dummyimage.com/600x400/3141d4/fff',
    ],
    price: 10,
  },
};

export const SinglePreview: Story = {
  args: {
    title: 'Название',
    description: 'Описание',
    category: 'New',
    previewImages: ['https://dummyimage.com/600x400/1ea7fd/fff'],
    price: 10,
  },
};

export const WithEllipsis: Story = {
  args: {
    title: 'Очень длинное название продукта на несколько строк',
    description: 'Очень длинное описание продукта на несколько строк',
    category: 'New',
    previewImages: [
      'https://dummyimage.com/600x400/1ea7fd/fff',
      'https://dummyimage.com/600x400/c900c9/fff',
      'https://dummyimage.com/600x400/3141d4/fff',
    ],
    price: 10,
  },
};
