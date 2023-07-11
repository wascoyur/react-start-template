import { Meta, StoryObj } from '@storybook/react';
import { AddToCartButton } from './AddToCartButton';

const meta: Meta<typeof AddToCartButton> = {
  component: AddToCartButton,
};

export default meta;
type Story = StoryObj<typeof AddToCartButton>;

export const Default: Story = {
  args: {
    counter: 0,
  },
};

export const NotEmpty: Story = {
  args: {
    counter: 1,
  },
};
