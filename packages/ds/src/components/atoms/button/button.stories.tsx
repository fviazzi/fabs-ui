import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';

import { Button } from './button';

import { BUTTON_VARIANTS, DEFAULT_BUTTON_VARIANTS } from './button.consts';

const meta = {
  title: 'Fabsui/Button',
  component: (args) => <Button {...args}>Click Me</Button>,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: Object.keys(BUTTON_VARIANTS.size),
    },
    variant: {
      control: { type: 'select' },
      options: Object.keys(BUTTON_VARIANTS.variant),
    },
  },
  args: {
    ...DEFAULT_BUTTON_VARIANTS,
    onClick: fn(),
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: DEFAULT_BUTTON_VARIANTS,
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
  },
};

export const Sm: Story = {
  args: {
    size: 'sm',
  },
};