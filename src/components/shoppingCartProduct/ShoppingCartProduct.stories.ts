import { Meta, StoryObj } from '@storybook/react';
import { ShoppingCartProduct } from './ShoppingCartProduct';

const meta: Meta<typeof ShoppingCartProduct> = {
  component: ShoppingCartProduct,
};

export default meta;
type Story = StoryObj<typeof ShoppingCartProduct>;

export const Default: Story = {
  args: {
    title: 'Название',
    description: 'Описание',
    previewImage: 'https://dummyimage.com/600x400/1ea7fd/fff',
    count: 2,
    price: 10,
  },
};

export const WithEllipsis: Story = {
  args: {
    title: 'Очень очень очень очень очень очень очень очень длинное название продукта на несколько строк',
    description: 'Очень очень очень очень очень очень очень очень длинное описание продукта на несколько строк',
    previewImage: 'https://dummyimage.com/600x400/1ea7fd/fff',
    count: 2,
    price: 10,
  },
};
