import { Modal } from './Modal';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Modal> = {
  component: Modal,
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Visible: Story = {
  args: {
    visible: true,
    children: '123',
  },
};
